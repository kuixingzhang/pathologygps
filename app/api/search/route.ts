import { NextRequest, NextResponse } from "next/server";
import searchPages from "../../../lib/pathology-search-index.json";

type EntityRecord = {
  name: string;
  content: string;
};

type SearchPage = {
  id: number;
  title: string;
  section: string;
  group: string;
  href: string;
  content: string;
  entities: string[];
  entityRecords?: EntityRecord[];
  aliases?: string[];
};

type SearchResult = {
  title: string;
  section: string;
  group: string;
  href: string;
  snippet: string;
  matchType: "entity" | "diagnosis" | "page";
};

const pages = searchPages as SearchPage[];

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9+.-]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function isOneEditAway(a: string, b: string): boolean {
  if (a === b) return true;
  if (Math.abs(a.length - b.length) > 1 || Math.min(a.length, b.length) < 5)
    return false;
  let i = 0;
  let j = 0;
  let edits = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      i++;
      j++;
      continue;
    }
    edits++;
    if (edits > 1) return false;
    if (a.length > b.length) i++;
    else if (b.length > a.length) j++;
    else {
      i++;
      j++;
    }
  }
  if (i < a.length || j < b.length) edits++;
  return edits <= 1;
}

function phraseScore(query: string, candidate: string): number {
  if (!query || !candidate) return 0;

  const queryTokens = query.split(" ").filter(Boolean);

  // Multi-word searches are phrase searches: every word must appear
  // consecutively and in the same order in the candidate.
  // This allows "papillary carcinoma" to match
  // "encapsulated papillary carcinoma", but not a candidate containing
  // only "papillary" or words scattered in unrelated text.
  if (queryTokens.length > 1) {
    if (candidate === query) return 1400;
    return ` ${candidate} `.includes(` ${query} `) ? 1050 : 0;
  }

  // Preserve broad, forgiving behavior for single-word searches.
  if (candidate === query) return 1400;
  if (` ${candidate} `.includes(` ${query} `)) return 1050;
  if (candidate.startsWith(query)) return 850;

  const candidateTokens = candidate.split(" ").filter(Boolean);
  const term = queryTokens[0];
  const found = candidateTokens.find(
    (token) =>
      token === term ||
      (term.length >= 2 && token.startsWith(term)) ||
      isOneEditAway(term, token),
  );

  if (!found) return 0;
  return found === term ? 700 : 560;
}

function tokenContentScore(query: string, content: string): number {
  const terms = query.split(" ").filter(Boolean);
  if (!terms.length || !content) return 0;

  // For multi-word queries, require the complete contiguous phrase in the
  // same content. Do not combine isolated occurrences of separate words.
  if (terms.length > 1) {
    return ` ${content} `.includes(` ${query} `) ? 64 : 0;
  }

  // Single-word searches remain broad and can match a whole word,
  // a prefix, or a one-character typo.
  const term = terms[0];
  const words = [...new Set(content.split(" ").filter(Boolean))];
  const exact = words.includes(term);
  if (exact) {
    const occurrences = content.split(term).length - 1;
    return 40 + Math.min(occurrences, 14);
  }

  const near = words.some(
    (word) =>
      (term.length >= 2 && word.startsWith(term)) || isOneEditAway(term, word),
  );
  return near ? 24 : 0;
}

function makeSnippet(content: string, query: string): string {
  const normalized = normalize(content);
  const normalizedQuery = normalize(query);
  let position = normalizedQuery ? normalized.indexOf(normalizedQuery) : -1;
  if (position < 0) {
    const firstTerm = normalizedQuery.split(" ")[0] ?? "";
    position = firstTerm ? normalized.indexOf(firstTerm) : -1;
  }
  if (position < 0) return content.slice(0, 210).trim();
  const start = Math.max(0, position - 90);
  return `${start > 0 ? "…" : ""}${content.slice(start, start + 230).trim()}…`;
}

function slugify(value: string): string {
  return normalize(value).replace(/\s+/g, "-").slice(0, 90);
}

function makeEntityHref(
  page: SearchPage,
  name: string,
  rawQuery: string,
): string {
  const params = new URLSearchParams({
    gpsTarget: name,
    gpsQuery: rawQuery,
  });
  return `${page.href}?${params.toString()}#gps-${slugify(name)}`;
}

export async function GET(request: NextRequest) {
  const rawQuery = request.nextUrl.searchParams.get("q") ?? "";
  const query = normalize(rawQuery);
  if (!query || query.length < 2) return NextResponse.json({ results: [] });

  const results: Array<SearchResult & { score: number }> = [];

  for (const page of pages) {
    const normalizedPageContent = normalize(page.content ?? "");
    const titleScore = phraseScore(query, normalize(page.title));
    const pageContentScore = tokenContentScore(query, normalizedPageContent);
    let matchedEntityCount = 0;

    // Search the complete text belonging to each named entity.
    for (const entity of page.entityRecords ?? []) {
      const entityName = normalize(entity.name);
      const entityContent = normalize(entity.content ?? "");
      const nameScore = phraseScore(query, entityName);

      const alias = (page.aliases ?? []).find((item) => {
        const [aliasText, canonicalEntity] = item.split("::");
        return (
          normalize(aliasText) === query &&
          normalize(canonicalEntity ?? "") === entityName
        );
      });
      const aliasScore = alias ? 1320 : 0;
      const contentScore = tokenContentScore(query, entityContent);
      const score = Math.max(
        nameScore,
        aliasScore,
        contentScore ? 260 + contentScore : 0,
      );

      if (score === 0) continue;
      matchedEntityCount++;

      results.push({
        title: entity.name,
        section: page.section,
        group: page.group,
        href: makeEntityHref(page, entity.name, rawQuery),
        snippet:
          contentScore > 0
            ? makeSnippet(entity.content, rawQuery)
            : makeSnippet(entity.name, rawQuery),
        score: score + (titleScore > 0 ? 8 : 0),
        matchType: "entity",
      });
    }

    // Backward compatibility for older index records without entityRecords.
    if (!page.entityRecords?.length) {
      let bestEntity: string | null = null;
      let bestEntityScore = 0;
      for (const entity of page.entities ?? []) {
        const entityScore = phraseScore(query, normalize(entity));
        const alias = (page.aliases ?? []).find((item) => {
          const [aliasText, canonicalEntity] = item.split("::");
          return (
            normalize(aliasText) === query &&
            normalize(canonicalEntity ?? "") === normalize(entity)
          );
        });
        const score = Math.max(entityScore, alias ? 1320 : 0);
        if (score > bestEntityScore) {
          bestEntity = entity;
          bestEntityScore = score;
        }
      }

      if (bestEntity && bestEntityScore >= 560) {
        matchedEntityCount++;
        results.push({
          title: bestEntity,
          section: page.section,
          group: page.group,
          href: makeEntityHref(page, bestEntity, rawQuery),
          snippet: makeSnippet(page.content, rawQuery),
          score: bestEntityScore,
          matchType: "diagnosis",
        });
      }
    }

    // Keep page-level discovery when no entity-specific text matched.
    if (matchedEntityCount === 0 && pageContentScore > 0) {
      results.push({
        title: page.title,
        section: page.section,
        group: page.group,
        href: page.href,
        snippet: makeSnippet(page.content, rawQuery),
        score: Math.max(titleScore, pageContentScore),
        matchType: "page",
      });
    }
  }

  results.sort(
    (a, b) =>
      b.score - a.score ||
      (a.matchType === "page" ? 1 : 0) - (b.matchType === "page" ? 1 : 0) ||
      a.title.localeCompare(b.title) ||
      a.href.localeCompare(b.href),
  );

  return NextResponse.json(
    {
      query: rawQuery,
      total: results.length,
      results: results.slice(0, 15).map(({ score: _score, ...item }) => item),
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    },
  );
}

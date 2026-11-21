import { NextRequest, NextResponse } from "next/server";
import searchPages from "../../../lib/pathology-search-index.json";

type SearchPage = {
  id: number;
  title: string;
  section: string;
  group: string;
  href: string;
  content: string;
  entities: string[];
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

function editDistanceAtMostOne(a: string, b: string): boolean {
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
    if (++edits > 1) return false;
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

function titleTermScore(term: string, title: string): number {
  if (title === term) return 35;
  if (title.startsWith(term)) return 27;
  if (title.includes(term)) return 23;
  const tokens = title.split(" ");
  if (tokens.some((token) => editDistanceAtMostOne(term, token))) return 17;
  return 0;
}

function contentTermScore(
  term: string,
  normalizedContent: string,
  contentTokens: Set<string>,
): number {
  if (contentTokens.has(term)) {
    const occurrences = normalizedContent.split(term).length - 1;
    return 9 + Math.min(occurrences, 12);
  }
  if (normalizedContent.includes(term)) {
    const occurrences = normalizedContent.split(term).length - 1;
    return 6 + Math.min(occurrences, 12);
  }
  if (contentTokens.size && term.length >= 5) {
    for (const token of contentTokens) {
      if (editDistanceAtMostOne(term, token)) return 2;
    }
  }
  return 0;
}

function makeSnippet(content: string, query: string): string {
  const lower = content.toLowerCase();
  const firstTerm = query.trim().split(/\s+/)[0]?.toLowerCase() ?? "";
  const position = lower.indexOf(firstTerm);
  if (position < 0) return content.slice(0, 190).trim();
  const start = Math.max(0, position - 85);
  return `${start > 0 ? "…" : ""}${content.slice(start, start + 210).trim()}…`;
}

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const normalizedQuery = normalize(query);
  const terms = normalizedQuery.split(" ").filter(Boolean);
  if (!terms.length || normalizedQuery.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results: Array<{
    title: string;
    section: string;
    group: string;
    href: string;
    snippet: string;
    score: number;
    matchType: "diagnosis" | "page";
  }> = [];

  for (const page of pages) {
    const content = normalize(page.content);
    const contentTokens = new Set(content.split(" "));
    const pageTitle = normalize(page.title);
    const baseScores = terms.map((term) => {
      return Math.max(
        titleTermScore(term, pageTitle),
        contentTermScore(term, content, contentTokens),
      );
    });

    if (baseScores.some((score) => score === 0)) continue;

    let bestTitle = page.title;
    let bestScore = baseScores.reduce((sum, score) => sum + score, 0);
    let matchType: "diagnosis" | "page" = "page";

    for (const entity of page.entities) {
      const entityTitle = normalize(entity);
      let score = 0;
      let complete = true;

      for (let i = 0; i < terms.length; i++) {
        const entityScore = titleTermScore(terms[i], entityTitle);
        const termScore = Math.max(
          entityScore,
          baseScores[i] >= 9 ? baseScores[i] : 0,
        );
        if (!termScore) {
          complete = false;
          break;
        }
        score += termScore;
      }

      if (complete && score > bestScore) {
        bestTitle = entity;
        bestScore = score;
        matchType = "diagnosis";
      }
    }

    results.push({
      title: bestTitle,
      section: page.section,
      group: page.group,
      href: page.href,
      snippet: makeSnippet(page.content, query),
      score: bestScore,
      matchType,
    });
  }

  results.sort(
    (a, b) =>
      b.score - a.score ||
      a.title.localeCompare(b.title) ||
      a.href.localeCompare(b.href),
  );

  return NextResponse.json(
    {
      query,
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

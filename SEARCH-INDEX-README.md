# PathologyGPS Global Search Index

This implementation indexes every `app/**/page.tsx` route except the root homepage.

## How it works
- `scripts/generate-pathology-index.cjs` scans the Next.js page source using the TypeScript AST.
- It collects visible JSX text, static text values, and named `name` / `entity` values.
- It generates `lib/pathology-search-index.json` (page records plus extracted named entities).
- `app/api/search/route.ts` searches the index on the server, so the full index is not shipped to the browser.
- `src/components/PathologySearch.tsx` calls `/api/search` with a short debounce and provides keyboard navigation.

## Regenerate after adding or substantially editing pages

```bash
npm run search:index
```

Then run:

```bash
npm run build
```

## Scope and limitations
This is a first full-site, source-derived index. It searches static text present in each page's TSX source, including diagnosis names, aliases, morphology, histology, IHC, molecular findings, genes, and differential diagnoses when those terms are present as static page content.

It does not infer missing synonyms or add outside medical knowledge. Dynamic content loaded from a database, content generated at runtime, and content not present in the page source is not indexed by this generator. Results currently link to the containing topic page; they do not yet deep-link to an individual diagnosis section.

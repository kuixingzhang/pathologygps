# PathologyGPS Search 2.2 — universal in-page target locator

This is a small overlay patch. It only replaces:
- `src/components/SearchTargetLocator.tsx`

Keep the existing Search 2.1 API route, generated search index, layout, CSS, and all other project files unchanged.

## What changed
- Searches visible semantic headings first, then visible text containers, rather than assuming every diagnosis uses the same card markup.
- Selects the smallest matching title element and walks to a reasonably sized card/container for scrolling and highlighting.
- Supports a short parenthetical abbreviation after a diagnosis title.
- Tries to open matching native `<details>` content when needed.
- Waits up to 12 seconds for client-rendered content before giving up.
- Keeps `gpsTarget` in the URL if no exact target can be found, which makes failures easier to inspect.

## Install
Extract this ZIP into the project root and allow it to overwrite the one listed file. Do not replace the API route or search index from this patch.

Then run `npm run build` and test a few diagnoses from pages with different layouts.

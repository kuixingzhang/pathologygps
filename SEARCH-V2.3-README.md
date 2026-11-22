# PathologyGPS Search 2.3 — route-aware navigation and card expansion

This is an overlay patch. It replaces only:

- `src/components/SearchTargetLocator.tsx`

Keep the current Search API, generated index, search UI, CSS, and all diagnostic pages unchanged.

## Why this patch is needed

The root layout stays mounted during Next.js client-side navigation. A locator effect with an empty dependency list can run on the homepage before `gpsTarget` exists, then never rerun after the search result navigates to a diagnostic page. In addition, many diagnostic pages render the diagnosis title in a collapsed card; the card must be expanded before the user can see its full diagnostic profile.

## What changed

- Re-runs target lookup whenever the Next.js pathname changes.
- Waits for client-rendered page content.
- Finds an exact diagnosis title or explicit `data-search-entity` marker.
- Finds the nearest diagnostic card (`article` / marked card).
- Opens common collapsed diagnostic-card controls before scrolling.
- Scrolls to the card after React has had time to render the expanded content.
- Preserves the target hash and applies the existing `gps-search-target` highlight class.

## Install

Extract into the project root and allow overwrite of the one file listed above.

Then run:

```powershell
npm run build
npm run dev
```

Test by searching and clicking a diagnosis result, not by directly pasting a target URL into an already-open diagnostic page. Suggested tests:

- Dedifferentiated liposarcoma (DDLPS)
- Papillary thyroid carcinoma
- Medullary thyroid carcinoma
- Synovial sarcoma
- Schwannoma

Note: This patch does not add missing diagnosis-level anchors to custom pages that do not render the exact diagnosis title in the DOM. Those pages will need explicit `data-search-entity` markers in their diagnostic cards.

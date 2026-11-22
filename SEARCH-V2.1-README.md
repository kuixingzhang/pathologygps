# PathologyGPS Search 2.1 — relevance and target-navigation correction

This is an overlay patch, NOT a replacement for the full project.

## Replace / add
- Replace `app/api/search/route.ts`
- Replace `app/layout.tsx`
- Replace `app/globals.css`
- Replace `scripts/generate-pathology-index.cjs`
- Replace `lib/pathology-search-index.json` with the regenerated index included here
- Add `src/components/SearchTargetLocator.tsx`

Keep all other project files and folders.

## What changed
- Diagnosis names are matched as phrases, not by independently scoring every word.
- Exact diagnosis-name matches rank above partial, page-title, and body-text matches.
- A single-token alias such as DDLPS can match a token in a named diagnosis (e.g. `Dedifferentiated liposarcoma (DDLPS)`).
- Names found only inside a `differential` property are excluded from the independent diagnosis entity index.
- Direct diagnosis results carry a `gpsTarget` and stable hash anchor.
- The global locator waits for rendered content, finds an exact matching heading, scrolls to its card, highlights it, and preserves the anchor in the URL.

## Install
Merge the listed files into the project root, replacing files when prompted. Do not replace the whole project.

Then run:
```powershell
npm run build
```

If build succeeds, start locally and test:
- `papillary thyroid carcinoma` — exact diagnosis should rank first.
- `DDLPS` and `dedifferentiated liposarcoma` — diagnosis-level results should open at the matching card.
- `MDM2` and `SOX10` — context/page results, not falsely labeled diagnoses.
- `SS18::SSX` — relevant pages should appear based on content.

The locator depends on visible headings/cards. Unusual custom layouts may still need explicit `data-search-entity` markers.

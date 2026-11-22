# PathologyGPS Search 2.0 — targeted navigation update

This is an overlay update for the current PathologyGPS project. It is NOT a replacement for the entire project.

## Files to merge/replace
- `app/api/search/route.ts` — diagnosis-name matching is now stricter; diagnosis matches receive a target URL.
- `app/layout.tsx` — mounts the target locator globally.
- `app/globals.css` — temporary visual highlight for the destination.
- `src/components/SearchTargetLocator.tsx` — new client-side locator.

Keep all other existing files and folders.

## Behavior
When the API identifies a direct diagnosis/entity-name match, the result URL includes `gpsTarget` and a stable slug hash. On the destination page, the locator looks for a matching heading or diagnostic card, scrolls it into view, applies a brief highlight, and removes the transient query parameter. Page-level matches still open the page normally.

The locator uses the actual rendered page DOM, because the existing pages have different React structures and do not share one universal diagnosis-card component.

## Install
Merge these files into the project root, replacing the three existing files and adding the new component. Then run:
`npm run build`

Test direct diagnosis matches such as `DDLPS`, `dedifferentiated liposarcoma`, and `papillary thyroid carcinoma`. Also test marker-only queries such as `MDM2` and `SOX10`; these should remain page/context matches unless the marker itself is a diagnosis entity.

## Limitation
This first targeted-navigation pass locates rendered headings/cards by the matched diagnosis name. Pages with unusual layouts or collapsed/virtualized content may need explicit `data-search-entity` markers or per-page anchors. Cross-page diagnosis deduplication and richer match-type labels are a separate follow-up.

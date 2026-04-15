# CAVO Build Notes

## Current focus
- Rebuilt the mobile shell toward a cleaner black / gold premium direction.
- Removed live Firebase execution from the UI temporarily to eliminate auth runtime errors during design polish.
- Swapped the bottom tab from Favorites to Links.
- Added local preview account flow until Firebase is reattached.
- Improved product details structure, category presentation, and back navigation.
- Prepared Android icon generation through `@capacitor/assets` using the circular logo only.

## Pending after this patch
- Reattach Firebase Auth after the UI is approved.
- Connect ImageKit secure upload through secrets.
- Final data bridge with Neon.

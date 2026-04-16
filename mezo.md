# CAVO app-first rebuild notes

## Current build focus
- App-first mobile experience
- English default with AR/EN toggle
- Black / gold premium UI
- External media only from ImageKit
- No Firebase runtime wired in this version
- Home, Categories, Links, Cart, Account, Product details rebuilt as mobile screens

## Media source
- ImageKit endpoint: `https://ik.imagekit.io/luivuvevia`
- Current build uses batch 1 products only
- Product images are not bundled inside the APK

## Pricing rules applied
- Regular products after discount: 2150 to 3000 EGP
- Original price cap: 3200 EGP
- Alexander McQueen exception: 3850 EGP after discount

## Next steps after UI approval
1. Reconnect Firebase auth cleanly
2. Add ImageKit signed upload flow
3. Add Neon product data and account/order sync
4. Add kids, offers, and video batches

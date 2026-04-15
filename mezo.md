# CAVO Build Notes

## Active direction
- Final build uses the uploaded circular logo only.
- Default theme is dark black/gold, with light as optional.
- Bottom navigation uses circles and replaces Favorites with Links.
- Links tab includes website, Facebook, WhatsApp, Telegram, Instagram, and TikTok.
- Firebase Authentication is wired for Email/Password and Google now.
- Phone login is staged in the UI and needs OTP completion in the next patch.
- ImageKit endpoint and public key are ready in the client. Secure upload still needs `IMAGEKIT_PRIVATE_KEY` in environment secrets.

## Current routes
- `/` splash
- `/home`
- `/categories`
- `/links`
- `/cart`
- `/account`
- `/auth`
- `/videos`
- `/product/[slug]`

## Social references
- Website: https://cavo-store.vercel.app/store
- Facebook: https://www.facebook.com/share/18ahZ8oWVH/
- WhatsApp: https://wa.me/201221204322
- Telegram: https://t.me/Cavo_store
- Instagram: https://instagram.com/Cavo_mirror
- TikTok: https://www.tiktok.com/@cavo6159

## Next patch ideas
- secure ImageKit upload route with private key
- OTP flow for phone sign-in
- Neon-backed product API
- children category images and product videos

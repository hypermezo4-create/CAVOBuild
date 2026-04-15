export const APP_NAME = 'CAVO';
export const DEFAULT_THEME = 'dark' as const;
export const CURRENCY = 'EGP';
export const WEBSITE_URL = 'https://cavo-store.vercel.app/store';
export const DISPLAY_DOMAIN = 'www.cavo.com';
export const ORIGINAL_PRICE = 3870;
export const PRICE_RANGE = { min: 2000, max: 2900 } as const;
export const WHATSAPP_PHONE = '201221204322';
export const WHATSAPP_LABEL = '01221204322';
export const SOCIAL_LINKS = [
  { id: 'website', label: 'الموقع الرسمي', subtitle: DISPLAY_DOMAIN, href: WEBSITE_URL, icon: '◎', accent: '#d9b35f' },
  { id: 'facebook', label: 'Facebook', subtitle: 'CAVO', href: 'https://www.facebook.com/share/18ahZ8oWVH/', icon: 'f', accent: '#1877F2' },
  { id: 'whatsapp', label: 'WhatsApp', subtitle: WHATSAPP_LABEL, href: `https://wa.me/${WHATSAPP_PHONE}`, icon: 'w', accent: '#25D366' },
  { id: 'telegram', label: 'Telegram', subtitle: '@Cavo_store', href: 'https://t.me/Cavo_store', icon: 't', accent: '#229ED9' },
  { id: 'instagram', label: 'Instagram', subtitle: '@Cavo_mirror', href: 'https://instagram.com/Cavo_mirror', icon: 'i', accent: '#E4405F' },
  { id: 'tiktok', label: 'TikTok', subtitle: '@cavo6159', href: 'https://www.tiktok.com/@cavo6159', icon: '♪', accent: '#FE2C55' },
] as const;

export type ThemeMode = 'dark' | 'light';
export type AppUser = {
  uid: string;
  name: string;
  email: string;
  provider?: string;
  avatarUrl?: string | null;
};
export type CartItem = { productId: string; size: string; quantity: number };

import type { CartItem } from '@/types';
const CART_KEY = 'cavo-cart';
export const loadCart = (): CartItem[] => { if (typeof window === 'undefined') return []; try { return JSON.parse(window.localStorage.getItem(CART_KEY) || '[]'); } catch { return []; } };
export const saveCart = (cart: CartItem[]) => { if (typeof window !== 'undefined') window.localStorage.setItem(CART_KEY, JSON.stringify(cart)); };

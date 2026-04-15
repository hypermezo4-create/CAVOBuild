import type { AppUser } from '@/types';
const USER_KEY = 'cavo-user';
export const loadUser = (): AppUser | null => { if (typeof window === 'undefined') return null; try { return JSON.parse(window.localStorage.getItem(USER_KEY) || 'null'); } catch { return null; } };
export const saveUser = (user: AppUser | null) => { if (typeof window === 'undefined') return; if (user) window.localStorage.setItem(USER_KEY, JSON.stringify(user)); else window.localStorage.removeItem(USER_KEY); };

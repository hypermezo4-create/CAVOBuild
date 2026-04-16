import type { AppUser } from '@/types';

const KEY = 'cavo-user';

export function loadUser(): AppUser | null {
  if (typeof window === 'undefined') return null;
  try {
    return JSON.parse(window.localStorage.getItem(KEY) || 'null') as AppUser | null;
  } catch {
    return null;
  }
}

export function saveUser(user: AppUser | null) {
  if (typeof window === 'undefined') return;
  if (!user) {
    window.localStorage.removeItem(KEY);
    return;
  }
  window.localStorage.setItem(KEY, JSON.stringify(user));
}

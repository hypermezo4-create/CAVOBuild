"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { AppUser, CartItem, Locale, ThemeMode } from '@/types';
import { loadCart, saveCart } from '@/services/cart';
import { loadUser, saveUser } from '@/services/user';
import { DEFAULT_LOCALE, DEFAULT_THEME } from '@/lib/constants';

type AppContextType = {
  theme: ThemeMode;
  locale: Locale;
  setTheme: (theme: ThemeMode) => void;
  setLocale: (locale: Locale) => void;
  user: AppUser | null;
  login: (payload: AppUser) => void;
  logout: () => void;
  cart: CartItem[];
  addToCart: (productId: string, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(DEFAULT_THEME);
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [user, setUser] = useState<AppUser | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedTheme = (window.localStorage.getItem('cavo-theme') as ThemeMode | null) || DEFAULT_THEME;
    const storedLocale = (window.localStorage.getItem('cavo-locale') as Locale | null) || DEFAULT_LOCALE;
    setThemeState(storedTheme);
    setLocaleState(storedLocale);
    document.documentElement.dataset.theme = storedTheme;
    document.documentElement.lang = storedLocale;
    document.documentElement.dir = storedLocale === 'ar' ? 'rtl' : 'ltr';
    setCart(loadCart());
    setUser(loadUser());
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('cavo-theme', nextTheme);
  };

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    document.documentElement.lang = nextLocale;
    document.documentElement.dir = nextLocale === 'ar' ? 'rtl' : 'ltr';
    window.localStorage.setItem('cavo-locale', nextLocale);
  };

  const login = (payload: AppUser) => {
    setUser(payload);
    saveUser(payload);
  };

  const logout = () => {
    setUser(null);
    saveUser(null);
  };

  const addToCart = (productId: string, size: string) => {
    setCart((current) => {
      const existing = current.find((item) => item.productId === productId && item.size === size);
      const next = existing
        ? current.map((item) =>
            item.productId === productId && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...current, { productId, size, quantity: 1 }];
      saveCart(next);
      return next;
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((current) => {
      const next = current
        .map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      saveCart(next);
      return next;
    });
  };

  const value = useMemo(
    () => ({ theme, locale, setTheme, setLocale, user, login, logout, cart, addToCart, removeFromCart }),
    [theme, locale, user, cart]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppState must be used inside AppProviders');
  return context;
}

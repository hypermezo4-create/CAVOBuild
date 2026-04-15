"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { AppUser, CartItem, ThemeMode } from '@/types';
import { loadCart, saveCart } from '@/services/cart';
import { loadUser, saveUser } from '@/services/user';

type AppContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  user: AppUser | null;
  login: (payload: AppUser) => void;
  logout: () => void;
  cart: CartItem[];
  favorites: string[];
  addToCart: (productId: string, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  toggleFavorite: (productId: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [user, setUser] = useState<AppUser | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('cavo-theme') as ThemeMode | null;
    const nextTheme = storedTheme || 'dark';
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setCart(loadCart());
    setUser(loadUser());
    try {
      setFavorites(JSON.parse(window.localStorage.getItem('cavo-favorites') || '[]'));
    } catch {
      setFavorites([]);
    }
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('cavo-theme', nextTheme);
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

  const toggleFavorite = (productId: string) => {
    setFavorites((current) => {
      const next = current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId];
      window.localStorage.setItem('cavo-favorites', JSON.stringify(next));
      return next;
    });
  };

  const value = useMemo(
    () => ({ theme, setTheme, user, login, logout, cart, favorites, addToCart, removeFromCart, toggleFavorite }),
    [theme, user, cart, favorites]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppState must be used inside AppProviders');
  return context;
}

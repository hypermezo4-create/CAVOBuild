"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { AppUser, CartItem, ThemeMode } from '@/types';
import { loadCart, saveCart } from '@/services/cart';
import { clearUserSession, loadUserSession } from '@/services/session';

type AppContextType = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  user: AppUser | null;
  isAuthReady: boolean;
  logout: () => Promise<void>;
  cart: CartItem[];
  addToCart: (productId: string, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProviders({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>('dark');
  const [user, setUser] = useState<AppUser | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem('cavo-theme') as ThemeMode | null;
    const nextTheme = storedTheme || 'dark';
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    setCart(loadCart());

    const syncUser = () => {
      setUser(loadUserSession());
      setIsAuthReady(true);
    };

    syncUser();
    window.addEventListener('cavo:user-change', syncUser as EventListener);
    return () => window.removeEventListener('cavo:user-change', syncUser as EventListener);
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('cavo-theme', nextTheme);
  };

  const logout = async () => {
    clearUserSession();
    setUser(null);
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
    () => ({ theme, setTheme, user, isAuthReady, logout, cart, addToCart, removeFromCart }),
    [theme, user, isAuthReady, cart]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppState must be used inside AppProviders');
  return context;
}

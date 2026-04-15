"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { AppUser, CartItem, ThemeMode } from '@/types';
import { loadCart, saveCart } from '@/services/cart';
import { firebaseAuth } from '@/lib/firebase';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';

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

function mapFirebaseUser(user: User): AppUser {
  return {
    uid: user.uid,
    name: user.displayName || user.email?.split('@')[0] || 'CAVO Client',
    email: user.email || '',
    provider: user.providerData[0]?.providerId || 'password',
    avatarUrl: user.photoURL,
  };
}

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

    const unsubscribe = onAuthStateChanged(firebaseAuth, (nextUser) => {
      setUser(nextUser ? mapFirebaseUser(nextUser) : null);
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem('cavo-theme', nextTheme);
  };

  const logout = async () => {
    await signOut(firebaseAuth);
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
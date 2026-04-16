"use client";

import { useAppState } from '@/components/shared/AppProviders';

export function ThemeToggle() {
  const { theme, setTheme, locale } = useAppState();
  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button type="button" className="round-icon ghost" onClick={() => setTheme(next)} aria-label="theme toggle">
      {theme === 'dark' ? (locale === 'ar' ? 'فاتح' : 'Light') : (locale === 'ar' ? 'داكن' : 'Dark')}
    </button>
  );
}

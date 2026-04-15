"use client";

import { useAppState } from '@/components/shared/AppProviders';

export function ThemeToggle() {
  const { theme, setTheme } = useAppState();
  return (
    <button type="button" className="icon-button" aria-label="Toggle theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? '☀' : '☾'}
    </button>
  );
}

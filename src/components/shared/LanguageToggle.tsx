"use client";

import { useAppState } from '@/components/shared/AppProviders';

export function LanguageToggle() {
  const { locale, setLocale } = useAppState();

  return (
    <div className="segmented-toggle" aria-label="language switcher">
      <button type="button" className={locale === 'en' ? 'active' : ''} onClick={() => setLocale('en')}>EN</button>
      <button type="button" className={locale === 'ar' ? 'active' : ''} onClick={() => setLocale('ar')}>AR</button>
    </div>
  );
}

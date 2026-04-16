"use client";

import { APP_NAME, labels } from '@/lib/constants';
import { LanguageToggle } from '@/components/shared/LanguageToggle';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { BackButton } from '@/components/shared/BackButton';
import { useAppState } from '@/components/shared/AppProviders';

type Props = {
  title: string;
  subtitle?: string;
  backHref?: string;
};

export function PageHeader({ title, subtitle, backHref }: Props) {
  const { locale } = useAppState();
  const copy = labels[locale];

  return (
    <header className="page-header shell-card">
      <div className="header-top-row">
        {backHref ? <BackButton fallback={backHref} /> : <div className="logo-pill"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>}
        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
      <div className="header-copy">
        <p className="micro-label">{APP_NAME}</p>
        <h1>{title}</h1>
        {subtitle ? <p className="sub-copy">{subtitle}</p> : <p className="sub-copy">{copy.premiumSubtitle}</p>}
      </div>
    </header>
  );
}

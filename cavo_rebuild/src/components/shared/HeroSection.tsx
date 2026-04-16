"use client";

import Link from 'next/link';
import { homeHighlights } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function HeroSection() {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <section className="hero-panel shell-card">
      <div className="hero-visual">
        <img src={homeHighlights.hero} alt="CAVO hero" />
      </div>
      <div className="hero-copy-block">
        <p className="micro-label">CAVO</p>
        <h2>{copy.heroTitle}</h2>
        <p>{copy.heroText}</p>
        <div className="hero-buttons">
          <Link href="/categories" className="primary-pill">{copy.browse}</Link>
          <Link href="/links" className="ghost-pill">{copy.openLinks}</Link>
        </div>
      </div>
    </section>
  );
}

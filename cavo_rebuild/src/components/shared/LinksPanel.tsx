"use client";

import { appLinks, labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

const icons = {
  website: '◎',
  whatsapp: '◉',
  telegram: '✈',
  instagram: '◌',
  facebook: 'f',
  tiktok: '♪',
} as const;

export function LinksPanel() {
  const { locale } = useAppState();
  const copy = labels[locale];
  const rows = [
    ['website', appLinks.website],
    ['whatsapp', appLinks.whatsapp],
    ['telegram', appLinks.telegram],
    ['instagram', appLinks.instagram],
    ['facebook', appLinks.facebook],
    ['tiktok', appLinks.tiktok],
  ] as const;

  return (
    <section className="links-grid">
      {rows.map(([key, href]) => (
        <a key={key} href={href} target="_blank" rel="noreferrer" className="link-tile shell-card">
          <span className="social-circle">{icons[key]}</span>
          <div>
            <h3>{copy[key]}</h3>
            <p>{key === 'website' ? 'cavo-store.vercel.app/store' : APP_TEXT[key]}</p>
          </div>
        </a>
      ))}
    </section>
  );
}

const APP_TEXT = {
  website: 'CAVO Store',
  whatsapp: '01221204322',
  telegram: '@Cavo_store',
  instagram: '@Cavo_mirror',
  facebook: 'CAVO Facebook',
  tiktok: '@cavo6159',
} as const;

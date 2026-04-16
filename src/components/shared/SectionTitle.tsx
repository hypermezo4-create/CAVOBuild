"use client";

import Link from 'next/link';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function SectionTitle({ title, href }: { title: string; href?: string }) {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <div className="section-title-row">
      <h2>{title}</h2>
      {href ? <Link href={href} className="text-link">{copy.viewAll}</Link> : null}
    </div>
  );
}

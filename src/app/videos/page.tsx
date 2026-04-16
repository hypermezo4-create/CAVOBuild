"use client";

import { labels } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { useAppState } from '@/components/shared/AppProviders';

export default function VideosPage() {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <main className="page stack-xl">
      <PageHeader title={copy.videos} subtitle={copy.comingSoon} backHref="/home" />
      <section className="shell-card empty-card">
        <h2>{copy.videos}</h2>
        <p>{copy.comingSoon}</p>
      </section>
    </main>
  );
}

"use client";

import { labels } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { LinksPanel } from '@/components/shared/LinksPanel';
import { useAppState } from '@/components/shared/AppProviders';

export default function LinksPage() {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <section className="page stack-xl">
      <PageHeader title={copy.linksTitle} subtitle={copy.linksText} />
      <LinksPanel />
    </section>
  );
}

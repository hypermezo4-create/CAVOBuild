"use client";

import { labels } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { AccountPanel } from '@/components/shared/AccountPanel';
import { useAppState } from '@/components/shared/AppProviders';

export default function AccountPage() {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <section className="page stack-xl">
      <PageHeader title={copy.account} subtitle={copy.accountText} />
      <AccountPanel />
    </section>
  );
}

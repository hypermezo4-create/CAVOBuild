"use client";

import { labels } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { CartView } from '@/components/shared/CartView';
import { useAppState } from '@/components/shared/AppProviders';

export default function CartPage() {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <section className="page stack-xl">
      <PageHeader title={copy.cart} subtitle={copy.shipping} />
      <CartView />
    </section>
  );
}

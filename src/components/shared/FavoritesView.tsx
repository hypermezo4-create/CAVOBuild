"use client";

import Link from 'next/link';
import { products } from '@/lib/catalog';
import { useAppState } from '@/components/shared/AppProviders';
import { ProductGrid } from '@/components/shared/ProductGrid';

export function FavoritesView() {
  const { favorites } = useAppState();
  const items = products.filter((product) => favorites.includes(product.id));

  if (!items.length) {
    return (
      <section className="glass-card empty-state">
        <h2>لسه ما حفظتش موديلات</h2>
        <p className="muted">اضغط على القلب في أي منتج علشان تجمع المفضلة.</p>
        <Link href="/home" className="primary-button">ارجع للرئيسية</Link>
      </section>
    );
  }

  return <ProductGrid items={items} />;
}

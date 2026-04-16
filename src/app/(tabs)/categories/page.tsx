"use client";

import { useMemo, useState } from 'react';
import { menProducts, offerProducts, products, womenProducts } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductGrid } from '@/components/shared/ProductGrid';
import { useAppState } from '@/components/shared/AppProviders';

export default function CategoriesPage() {
  const { locale } = useAppState();
  const copy = labels[locale];
  const [tab, setTab] = useState<'all'|'men'|'women'|'offers'|'kids'>('all');

  const items = useMemo(() => {
    if (tab === 'men') return menProducts;
    if (tab === 'women') return womenProducts;
    if (tab === 'offers') return offerProducts;
    if (tab === 'kids') return [];
    return products;
  }, [tab]);

  return (
    <section className="page stack-xl">
      <PageHeader title={copy.categories} subtitle={copy.shipping} />
      <div className="filter-row shell-card">
        <button className={tab === 'all' ? 'chip active' : 'chip'} onClick={() => setTab('all')}>All</button>
        <button className={tab === 'men' ? 'chip active' : 'chip'} onClick={() => setTab('men')}>{copy.men}</button>
        <button className={tab === 'women' ? 'chip active' : 'chip'} onClick={() => setTab('women')}>{copy.women}</button>
        <button className={tab === 'offers' ? 'chip active' : 'chip'} onClick={() => setTab('offers')}>{copy.offers}</button>
        <button className={tab === 'kids' ? 'chip active' : 'chip'} onClick={() => setTab('kids')}>{copy.kids}</button>
      </div>
      {tab === 'kids' ? (
        <section className="shell-card empty-card">
          <h2>{copy.kids}</h2>
          <p>{copy.comingSoon}</p>
        </section>
      ) : (
        <ProductGrid items={items.slice(0, 24)} />
      )}
    </section>
  );
}

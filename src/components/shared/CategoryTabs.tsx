"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories, products } from '@/lib/catalog';
import { ProductGrid } from '@/components/shared/ProductGrid';

const filters = [
  { key: 'all', label: 'الكل' },
  { key: 'men', label: 'رجالي' },
  { key: 'women', label: 'حريمي' },
  { key: 'kids', label: 'أطفال' },
  { key: 'offers', label: 'عروض' },
] as const;

export function CategoryTabs() {
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all');

  const items = useMemo(() => {
    if (active === 'all') return products.slice(0, 18);
    if (active === 'offers') return products.filter((product) => product.offer).slice(0, 18);
    return products.filter((product) => product.category === active).slice(0, 18);
  }, [active]);

  return (
    <div className="stack-lg">
      <div className="chips-row chips-row-scroll">
        {filters.map((filter) => (
          <button key={filter.key} type="button" onClick={() => setActive(filter.key)} className={`chip ${active === filter.key ? 'active' : ''}`}>
            {filter.label}
          </button>
        ))}
      </div>

      <div className="quick-category-grid">
        {categories.filter((category) => category.key !== 'videos').map((category) => (
          <article key={category.key} className="quick-category-card glass-card">
            <div className="quick-category-media">
              <img src={category.poster} alt={category.label} loading="lazy" />
            </div>
            <div className="quick-category-copy">
              <p className="eyebrow small">CAVO</p>
              <strong>{category.label}</strong>
              <span>{category.subtitle}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="section-inline-head">
        <div>
          <p className="eyebrow small">Luxury catalog</p>
          <h2>منتجات القسم</h2>
        </div>
        <Link href="/videos" className="mini-link">فيديوهات</Link>
      </div>

      <ProductGrid items={items} />
    </div>
  );
}

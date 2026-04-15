"use client";

import { useMemo, useState } from 'react';
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
    if (active === 'all') return products.slice(0, 24);
    if (active === 'offers') return products.filter((product) => product.offer).slice(0, 18);
    return products.filter((product) => product.category === active).slice(0, 18);
  }, [active]);

  return (
    <div className="stack-lg">
      <div className="chips-row">
        {filters.map((filter) => (
          <button key={filter.key} type="button" onClick={() => setActive(filter.key)} className={`chip ${active === filter.key ? 'active' : ''}`}>
            {filter.label}
          </button>
        ))}
      </div>

      <div className="category-shortcuts">
        {categories.map((category) => (
          <div key={category.key} className="shortcut-card glass-card">
            <img src={category.poster} alt={category.label} loading="lazy" />
            <strong>{category.label}</strong>
          </div>
        ))}
      </div>

      <ProductGrid items={items} />
    </div>
  );
}

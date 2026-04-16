"use client";

import { useMemo, useState } from 'react';
import { menProducts, offerProducts, products, womenProducts } from '@/lib/catalog';
import { ProductGrid } from '@/components/shared/ProductGrid';

export function CategoryTabs() {
  const [active, setActive] = useState<'all'|'men'|'women'|'offers'>('all');
  const items = useMemo(() => {
    if (active === 'men') return menProducts;
    if (active === 'women') return womenProducts;
    if (active === 'offers') return offerProducts;
    return products;
  }, [active]);

  return (
    <div className="stack-lg">
      <div className="filter-row shell-card">
        {['all','men','women','offers'].map((filter) => (
          <button key={filter} type="button" className={active === filter ? 'chip active' : 'chip'} onClick={() => setActive(filter as typeof active)}>{filter}</button>
        ))}
      </div>
      <ProductGrid items={items.slice(0, 24)} />
    </div>
  );
}

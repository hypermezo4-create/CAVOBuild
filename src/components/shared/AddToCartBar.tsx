"use client";

import { useMemo, useState } from 'react';
import type { Product } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function AddToCartBar({ product }: { product: Product }) {
  const { addToCart, locale } = useAppState();
  const copy = labels[locale];
  const defaultSize = useMemo(() => product.sizes[0] || '41', [product.sizes]);
  const [size, setSize] = useState(defaultSize);

  return (
    <div className="add-to-cart-bar shell-card">
      <div className="size-selector">
        {product.sizes.slice(0, 6).map((item) => (
          <button key={item} type="button" className={`size-chip ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>
            {item}
          </button>
        ))}
      </div>
      <button type="button" className="primary-pill full" onClick={() => addToCart(product.id, size)}>
        {copy.addToCart} · {product.price.toLocaleString()} EGP
      </button>
    </div>
  );
}

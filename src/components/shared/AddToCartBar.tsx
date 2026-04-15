"use client";

import { useState } from 'react';
import type { Product } from '@/lib/catalog';
import { useAppState } from '@/components/shared/AppProviders';

export function AddToCartBar({ product }: { product: Product }) {
  const { addToCart } = useAppState();
  const [size, setSize] = useState(product.sizes[0]);

  return (
    <div className="add-to-cart-bar">
      <div className="size-pills">
        {product.sizes.slice(0, 6).map((item) => (
          <button key={item} type="button" className={`size-pill ${size === item ? 'active' : ''}`} onClick={() => setSize(item)}>{item}</button>
        ))}
      </div>
      <button type="button" className="primary-button full" onClick={() => addToCart(product.id, size)}>أضف للسلة — {product.price.toLocaleString()} EGP</button>
    </div>
  );
}

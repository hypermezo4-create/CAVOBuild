"use client";

import Link from 'next/link';
import type { Product } from '@/lib/catalog';
import { useAppState } from '@/components/shared/AppProviders';

export function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite } = useAppState();
  const fav = favorites.includes(product.id);

  return (
    <article className="product-card glass-card">
      <Link href={`/product/${product.slug}`} className="product-media">
        <img src={product.poster} alt={product.title} loading="lazy" />
        <div className="product-overlay">
          {product.offer ? <span className="tag hot">-{product.discount}%</span> : null}
          {product.isNew ? <span className="tag">NEW</span> : null}
        </div>
      </Link>
      <div className="product-meta">
        <div>
          <p className="eyebrow small">{product.brand}</p>
          <h3>{product.title}</h3>
        </div>
        <button type="button" className="icon-button" onClick={() => toggleFavorite(product.id)}>{fav ? '♥' : '♡'}</button>
      </div>
      <div className="price-row">
        <div>
          <strong>{product.price.toLocaleString()} EGP</strong>
          <span>{product.originalPrice.toLocaleString()} EGP</span>
        </div>
        <Link href={`/product/${product.slug}`} className="mini-link">عرض</Link>
      </div>
    </article>
  );
}

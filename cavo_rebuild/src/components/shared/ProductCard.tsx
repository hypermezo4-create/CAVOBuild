"use client";

import Link from 'next/link';
import type { Product } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function ProductCard({ product }: { product: Product }) {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <article className="product-card shell-card">
      <Link href={`/product/${product.slug}`} className="product-thumb-wrap">
        <img src={product.poster} alt={product.title} loading="lazy" className="product-thumb" />
        <div className="product-tags">
          {product.discount > 0 ? <span className="tag gold">-{product.discount}%</span> : null}
          {product.isNew ? <span className="tag subtle">NEW</span> : null}
        </div>
      </Link>
      <div className="product-copy">
        <p className="brand-line">{product.brand}</p>
        <h3>{product.title}</h3>
      </div>
      <div className="product-footer-row">
        <div>
          <strong>{product.price.toLocaleString()} EGP</strong>
          <span>{product.originalPrice.toLocaleString()} EGP</span>
        </div>
        <Link href={`/product/${product.slug}`} className="mini-cta">{copy.viewAll}</Link>
      </div>
    </article>
  );
}

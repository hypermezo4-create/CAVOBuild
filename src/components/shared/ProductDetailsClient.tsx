"use client";

import type { Product } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { AddToCartBar } from '@/components/shared/AddToCartBar';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductGrid } from '@/components/shared/ProductGrid';
import { useAppState } from '@/components/shared/AppProviders';

export function ProductDetailsClient({ product, related }: { product: Product; related: Product[] }) {
  const { locale } = useAppState();
  const copy = labels[locale];

  return (
    <main className="page stack-xl product-page-shell">
      <PageHeader title={product.title} subtitle={product.brand} backHref="/categories" />

      <section className="shell-card product-hero-card">
        <img src={product.cover} alt={product.title} className="product-cover" />
      </section>

      <section className="product-gallery-row">
        {product.images.slice(0, 4).map((image) => (
          <article key={image} className="shell-card gallery-thumb-card">
            <img src={image} alt={product.title} loading="lazy" className="gallery-thumb" />
          </article>
        ))}
      </section>

      <section className="shell-card product-content-card stack-lg">
        <div className="product-title-block">
          <div>
            <p className="micro-label">{product.brand}</p>
            <h1>{product.title}</h1>
          </div>
          {product.discount > 0 ? <span className="tag gold big">-{product.discount}%</span> : null}
        </div>

        <div className="price-stack">
          <strong>{product.price.toLocaleString()} EGP</strong>
          <span>{copy.beforeDiscount}: {product.originalPrice.toLocaleString()} EGP</span>
        </div>

        <p className="product-description">{product.description}</p>

        <div className="details-grid">
          <div className="detail-card"><span>{copy.category}</span><strong>{product.category === 'men' ? copy.men : copy.women}</strong></div>
          <div className="detail-card"><span>{copy.stock}</span><strong>{product.stock}</strong></div>
          <div className="detail-card"><span>{copy.color}</span><strong>{product.colors.join(' · ')}</strong></div>
          <div className="detail-card"><span>{copy.size}</span><strong>{product.sizes.join(' / ')}</strong></div>
        </div>
      </section>

      <section className="stack-lg">
        <div className="section-title-row"><h2>{copy.related}</h2></div>
        <ProductGrid items={related} />
      </section>

      <AddToCartBar product={product} />
    </main>
  );
}

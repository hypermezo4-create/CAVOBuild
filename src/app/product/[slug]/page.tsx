import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/lib/catalog';
import { AddToCartBar } from '@/components/shared/AddToCartBar';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductGrid } from '@/components/shared/ProductGrid';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 4);

  return (
    <main className="page stack-xl product-page-shell">
      <PageHeader title="التفاصيل" subtitle={`${product.brand} • ${product.variant}`} backHref="/categories" />
      <section className="gallery-stack product-gallery-shell">
        <article className="hero-gallery glass-card product-hero-card">
          <img src={product.images[0]} alt={product.title} />
        </article>
        <div className="thumb-row">
          {product.images.slice(1, 5).map((image) => (
            <article key={image} className="thumb-card glass-card">
              <img src={image} alt={product.title} loading="lazy" />
            </article>
          ))}
        </div>
      </section>

      <section className="glass-card product-details stack-lg product-details-premium">
        <div className="product-title-row">
          <div>
            <p className="eyebrow">{product.brand}</p>
            <h1>{product.title}</h1>
            <p className="muted">{product.variant}</p>
          </div>
          <span className="tag hot">-{product.discount}%</span>
        </div>

        <div className="price-block price-block-inline">
          <strong>{product.price.toLocaleString()} EGP</strong>
          <span>{product.originalPrice.toLocaleString()} EGP</span>
        </div>

        <p className="muted product-body-copy">{product.description}</p>

        <div className="detail-grid detail-grid-premium">
          <div className="glass-subcard"><span>القسم</span><strong>{product.category === 'men' ? 'رجالي' : product.category === 'women' ? 'حريمي' : 'أطفال'}</strong></div>
          <div className="glass-subcard"><span>التوفر</span><strong>{product.stock} قطع</strong></div>
          <div className="glass-subcard"><span>ألوان</span><strong>{product.colors.join(' • ')}</strong></div>
          <div className="glass-subcard"><span>المقاسات</span><strong>{product.sizes.join(' / ')}</strong></div>
        </div>
      </section>

      <section className="stack-lg">
        <div className="section-title"><h2>مناسب ليك</h2></div>
        <ProductGrid items={related} />
      </section>
      <AddToCartBar product={product} />
    </main>
  );
}

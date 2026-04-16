"use client";

import { categoryCards, featuredProducts, offerProducts } from '@/lib/catalog';
import { labels } from '@/lib/constants';
import { HeroSection } from '@/components/shared/HeroSection';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductGrid } from '@/components/shared/ProductGrid';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { useAppState } from '@/components/shared/AppProviders';

export default function HomePage() {
  const { locale } = useAppState();
  const copy = labels[locale];

  return (
    <section className="page stack-xl">
      <PageHeader title={copy.home} subtitle={copy.premiumSubtitle} />
      <HeroSection />
      <section className="stack-lg">
        <SectionTitle title={copy.categories} href="/categories" />
        <div className="categories-grid">
          {categoryCards.map((category) => (
            <CategoryCard
              key={category.key}
              href={category.key === 'offers' ? '/categories?view=offers' : '/categories'}
              title={category.key}
              subtitle={category.count ? `${category.count} drops` : copy.comingSoon}
              poster={category.poster}
            />
          ))}
        </div>
      </section>

      <section className="stack-lg">
        <SectionTitle title={copy.featured} href="/categories" />
        <ProductGrid items={featuredProducts.slice(0, 6)} />
      </section>

      <section className="stack-lg">
        <SectionTitle title={copy.hotOffers} href="/categories" />
        <ProductGrid items={offerProducts.slice(0, 4)} />
      </section>
    </section>
  );
}

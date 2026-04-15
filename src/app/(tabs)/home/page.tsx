import { categories, featuredProducts, offerProducts, videoDrops } from '@/lib/catalog';
import { HeroSection } from '@/components/shared/HeroSection';
import { CategoryCard } from '@/components/shared/CategoryCard';
import { PageHeader } from '@/components/shared/PageHeader';
import { ProductGrid } from '@/components/shared/ProductGrid';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { VideoCard } from '@/components/shared/VideoCard';

export default function HomePage() {
  return (
    <section className="page stack-xl">
      <PageHeader title="الرئيسية" subtitle="نسخة CAVO السريعة — رجالي، حريمي، أطفال، عروض، وروابط رسمية." />
      <HeroSection />
      <section className="stack-lg">
        <SectionTitle title="الأقسام الرئيسية" href="/categories" />
        <div className="categories-strip categories-strip-four">
          {categories.filter((category) => category.key !== 'videos').map((category) => (
            <CategoryCard key={category.key} href="/categories" title={category.label} subtitle={category.subtitle} poster={category.poster} />
          ))}
        </div>
      </section>
      <section className="stack-lg">
        <SectionTitle title="مختارات فخمة" href="/categories" />
        <ProductGrid items={featuredProducts.slice(0, 6)} />
      </section>
      <section className="stack-lg">
        <SectionTitle title="العروض الحالية" href="/categories" />
        <ProductGrid items={offerProducts.slice(0, 4)} />
      </section>
      <section className="stack-lg">
        <SectionTitle title="فيديوهات" href="/videos" />
        <div className="video-grid compact-video-grid">{videoDrops.slice(0, 4).map((video) => <VideoCard key={video.id} {...video} />)}</div>
      </section>
    </section>
  );
}

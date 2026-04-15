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
      <PageHeader title="الرئيسية" subtitle="تجربة CAVO السريعة: رجالي، حريمي، أطفال، عروض، وفيديوهات." />
      <HeroSection />
      <div className="categories-strip">
        {categories.map((category) => (
          <CategoryCard key={category.key} href={category.key === 'videos' ? '/videos' : '/categories'} title={category.label} subtitle={category.subtitle} poster={category.poster} />
        ))}
      </div>
      <section className="stack-lg">
        <SectionTitle title="مختارات فخمة" href="/categories" />
        <ProductGrid items={featuredProducts.slice(0, 6)} />
      </section>
      <section className="stack-lg">
        <SectionTitle title="العروض القوية" href="/categories" />
        <ProductGrid items={offerProducts.slice(0, 4)} />
      </section>
      <section className="stack-lg">
        <SectionTitle title="فيديوهات" href="/videos" />
        <div className="video-grid">{videoDrops.map((video) => <VideoCard key={video.id} {...video} />)}</div>
      </section>
    </section>
  );
}

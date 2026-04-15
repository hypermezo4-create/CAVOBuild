import { PageHeader } from '@/components/shared/PageHeader';
import { CategoryTabs } from '@/components/shared/CategoryTabs';

export default function CategoriesPage() {
  return (
    <section className="page stack-xl">
      <PageHeader title="الأقسام" subtitle="اختار بين الرجالي، الحريمي، الأطفال، أو العروض." />
      <CategoryTabs />
    </section>
  );
}

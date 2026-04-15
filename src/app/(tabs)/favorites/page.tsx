import { FavoritesView } from '@/components/shared/FavoritesView';
import { PageHeader } from '@/components/shared/PageHeader';

export default function FavoritesPage() {
  return (
    <section className="page stack-xl">
      <PageHeader title="المفضلة" subtitle="كل الموديلات اللي عينك عليها في مكان واحد." />
      <FavoritesView />
    </section>
  );
}

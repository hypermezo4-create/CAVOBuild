import { LinksPanel } from '@/components/shared/LinksPanel';
import { PageHeader } from '@/components/shared/PageHeader';

export default function LinksPage() {
  return (
    <section className="page stack-xl">
      <PageHeader title="الروابط" subtitle="الموقع الرسمي وكل قنوات CAVO في مكان واحد." />
      <LinksPanel />
    </section>
  );
}

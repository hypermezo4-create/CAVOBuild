import { CartView } from '@/components/shared/CartView';
import { PageHeader } from '@/components/shared/PageHeader';

export default function CartPage() {
  return (
    <section className="page stack-xl">
      <PageHeader title="السلة" subtitle="راجع اختياراتك وكمل الشراء بسرعة." />
      <CartView />
    </section>
  );
}

import { AccountPanel } from '@/components/shared/AccountPanel';
import { PageHeader } from '@/components/shared/PageHeader';

export default function AccountPage() {
  return (
    <section className="page stack-xl">
      <PageHeader title="حسابي" subtitle="تسجيل Firebase، إعداداتك، وروابط المتابعة من مكان واحد." />
      <AccountPanel />
    </section>
  );
}

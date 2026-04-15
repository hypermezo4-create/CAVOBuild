import { AuthForm } from '@/components/shared/AuthForm';
import { PageHeader } from '@/components/shared/PageHeader';

export default function AuthPage() {
  return (
    <main className="page stack-xl">
      <PageHeader title="الحساب" subtitle="واجهة دخول نظيفة وسريعة. ربط Firebase الحقيقي هنرجع له بعد ما نثبت الشكل النهائي." backHref="/account" />
      <AuthForm />
    </main>
  );
}

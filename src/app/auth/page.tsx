import { AuthForm } from '@/components/shared/AuthForm';
import { PageHeader } from '@/components/shared/PageHeader';

export default function AuthPage() {
  return (
    <main className="page stack-xl">
      <PageHeader title="تسجيل الدخول" subtitle="Firebase Email/Password + Google جاهزين الآن. Phone متجهز للباتش التالي." backHref="/account" />
      <AuthForm />
    </main>
  );
}

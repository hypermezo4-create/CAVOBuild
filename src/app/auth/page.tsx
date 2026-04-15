import { AuthForm } from '@/components/shared/AuthForm';
import { PageHeader } from '@/components/shared/PageHeader';

export default function AuthPage() {
  return (
    <main className="page stack-xl">
      <PageHeader title="تسجيل الدخول" subtitle="نسخة سريعة مؤقتة. هنضيف باقي الطرق بعدين." backHref="/account" />
      <AuthForm />
    </main>
  );
}

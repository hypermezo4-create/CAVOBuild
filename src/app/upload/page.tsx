import { PageHeader } from '@/components/shared/PageHeader';
import { UploadPanel } from '@/components/shared/UploadPanel';

export default function UploadPage() {
  return (
    <main className="page stack-xl">
      <PageHeader title="رفع الوسائط" subtitle="جاهز للعمل مع ImageKit. الرفع الفعلي يحتاج فقط المفتاح السري داخل أسرار GitHub." backHref="/account" />
      <UploadPanel />
    </main>
  );
}

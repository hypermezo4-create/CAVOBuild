import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page">
      <section className="glass-card empty-state">
        <h2>الصفحة غير موجودة</h2>
        <p className="muted">ارجع للتطبيق وكمل التصفح.</p>
        <Link href="/home" className="primary-button">الرئيسية</Link>
      </section>
    </main>
  );
}

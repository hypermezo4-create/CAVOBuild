"use client";

import Link from 'next/link';
import { useAppState } from '@/components/shared/AppProviders';
import { SOCIAL_LINKS } from '@/lib/constants';

export function AccountPanel() {
  const { user, logout, isAuthReady } = useAppState();

  if (!isAuthReady) {
    return <section className="glass-card empty-state"><h2>جاري تجهيز الحساب...</h2></section>;
  }

  if (!user) {
    return (
      <section className="glass-card empty-state account-empty-card">
        <div className="brand-mark big"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>
        <h2>حساب CAVO</h2>
        <p className="muted">جهز حسابك بسرعة علشان تحفظ السلة وتكمل الطلبات. الربط الحقيقي هيتفعل بعد تثبيت النسخة النهائية.</p>
        <Link href="/auth" className="primary-button">افتح الحساب</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      <section className="profile-card glass-card">
        <div className="brand-mark big"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>
        <div>
          <p className="eyebrow">CAVO Client</p>
          <h2>{user.name}</h2>
          <p className="muted">{user.email}</p>
        </div>
      </section>
      <section className="info-list glass-card">
        <div><span>الثيم</span><strong>Black / Gold افتراضي</strong></div>
        <div><span>الروابط</span><strong>{SOCIAL_LINKS.length} قنوات رسمية</strong></div>
        <div><span>الأسعار</span><strong>من 2000 إلى 2900</strong></div>
      </section>
      <Link href="/links" className="ghost-button full">فتح الروابط</Link>
      <Link href="/cart" className="ghost-button full">عرض السلة</Link>
      <button type="button" className="ghost-button full" onClick={() => void logout()}>تسجيل الخروج</button>
    </div>
  );
}

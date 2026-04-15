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
      <section className="glass-card empty-state">
        <h2>سجل دخولك</h2>
        <p className="muted">دخول سريع عبر Firebase علشان تتابع الطلبات والروابط وتجهز حسابك.</p>
        <Link href="/auth" className="primary-button">تسجيل الدخول</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      <section className="profile-card glass-card">
        <div className="brand-mark big"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>
        <div>
          <p className="eyebrow">{user.provider || 'firebase'}</p>
          <h2>{user.name}</h2>
          <p className="muted">{user.email}</p>
        </div>
      </section>
      <section className="info-list glass-card">
        <div><span>اللغة</span><strong>العربية / English</strong></div>
        <div><span>الثيم</span><strong>Dark افتراضي + Light اختياري</strong></div>
        <div><span>الروابط</span><strong>{SOCIAL_LINKS.length} قنوات جاهزة</strong></div>
      </section>
      <Link href="/links" className="ghost-button full">فتح الروابط</Link>
      <Link href="/upload" className="ghost-button full">رفع صورة / فيديو</Link>
      <button type="button" className="ghost-button full" onClick={() => void logout()}>تسجيل الخروج</button>
    </div>
  );
}

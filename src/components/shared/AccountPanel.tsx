"use client";

import Link from 'next/link';
import { useAppState } from '@/components/shared/AppProviders';

export function AccountPanel() {
  const { user, logout } = useAppState();

  if (!user) {
    return (
      <section className="glass-card empty-state">
        <h2>سجل دخولك</h2>
        <p className="muted">ابدأ حفظ المفضلة، تابع طلباتك، وكمل الشراء بسرعة.</p>
        <Link href="/auth" className="primary-button">تسجيل الدخول</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      <section className="profile-card glass-card">
        <div className="brand-mark big"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>
        <div>
          <p className="eyebrow">Member</p>
          <h2>{user.name}</h2>
          <p className="muted">{user.email}</p>
        </div>
      </section>
      <section className="info-list glass-card">
        <div><span>اللغة</span><strong>العربية / English</strong></div>
        <div><span>الثيم</span><strong>Dark default</strong></div>
        <div><span>الدفع</span><strong>Cash / InstaPay / Vodafone Cash</strong></div>
      </section>
      <button type="button" className="ghost-button full" onClick={logout}>تسجيل الخروج</button>
    </div>
  );
}

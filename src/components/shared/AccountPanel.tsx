"use client";

import Link from 'next/link';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

export function AccountPanel() {
  const { user, logout, locale } = useAppState();
  const copy = labels[locale];

  if (!user) {
    return (
      <section className="shell-card empty-card">
        <h2>{copy.accountTitle}</h2>
        <p>{copy.authText}</p>
        <Link href="/auth" className="primary-pill">{copy.login}</Link>
      </section>
    );
  }

  return (
    <div className="stack-lg">
      <section className="profile-card shell-card">
        <div className="logo-pill large"><img src="/brand/cavo-logo-circle.png" alt="CAVO" /></div>
        <div>
          <p className="micro-label">CAVO Member</p>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </section>
      <section className="shell-card info-list">
        <div><span>{copy.language}</span><strong>EN / AR</strong></div>
        <div><span>{copy.theme}</span><strong>{copy.darkDefault}</strong></div>
        <div><span>{copy.support}</span><strong>{copy.shipping}</strong></div>
      </section>
      <button type="button" className="ghost-pill full" onClick={logout}>Logout</button>
    </div>
  );
}

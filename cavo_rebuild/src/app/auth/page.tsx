"use client";

import { labels } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { AuthForm } from '@/components/shared/AuthForm';
import { useAppState } from '@/components/shared/AppProviders';

export default function AuthPage() {
  const { locale } = useAppState();
  const copy = labels[locale];
  return (
    <main className="page stack-xl">
      <PageHeader title={copy.authTitle} subtitle={copy.authText} backHref="/account" />
      <AuthForm />
    </main>
  );
}

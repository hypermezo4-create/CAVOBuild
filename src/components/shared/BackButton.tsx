"use client";

import { useRouter } from 'next/navigation';
import { useAppState } from '@/components/shared/AppProviders';

export function BackButton({ fallback = '/home' }: { fallback?: string }) {
  const router = useRouter();
  const { locale } = useAppState();

  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallback);
  };

  return (
    <button type="button" className="round-icon" onClick={handleBack}>
      <span>{locale === 'ar' ? 'رجوع' : 'Back'}</span>
    </button>
  );
}

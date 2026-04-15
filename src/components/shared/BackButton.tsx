"use client";

import { useRouter } from 'next/navigation';

export function BackButton({ fallbackHref = '/home' }: { fallbackHref?: string }) {
  const router = useRouter();

  const goBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <button type="button" className="icon-button ghost-link" aria-label="رجوع" onClick={goBack}>
      ←
    </button>
  );
}

"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = window.setTimeout(() => router.replace('/home'), 1100);
    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="splash-screen">
      <div className="splash-glow" />
      <img src="/brand/cavo-logo-circle.png" alt="CAVO" className="splash-logo" />
      <div className="splash-copy">
        <p className="eyebrow">Mirror Quality Footwear</p>
        <h1>CAVO</h1>
        <p className="muted">روابطك... بطريقتك.</p>
      </div>
    </main>
  );
}

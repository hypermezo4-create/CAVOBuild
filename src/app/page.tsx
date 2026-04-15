"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SplashPage() {
  const router = useRouter();
  useEffect(() => {
    const timer = window.setTimeout(() => router.replace('/home'), 950);
    return () => window.clearTimeout(timer);
  }, [router]);

  return (
    <main className="splash-screen">
      <div className="splash-glow" />
      <img src="/brand/cavo-logo-circle.png" alt="CAVO" className="splash-logo" />
      <div className="splash-copy">
        <p className="eyebrow">Black / Gold Luxury</p>
        <h1>CAVO</h1>
        <p className="muted">Mirror quality footwear • رجالي • حريمي • أطفال • عروض</p>
      </div>
    </main>
  );
}

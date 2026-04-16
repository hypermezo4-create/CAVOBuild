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
      <div className="splash-orb" />
      <img src="/brand/cavo-logo-circle.png" alt="CAVO" className="splash-logo" />
      <div className="splash-copy">
        <p className="micro-label">Premium app</p>
        <h1>CAVO</h1>
      </div>
    </main>
  );
}

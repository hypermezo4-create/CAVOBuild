import Link from 'next/link';
import { homeHighlights } from '@/lib/catalog';

export function HeroSection() {
  return (
    <section className="hero-grid">
      <article className="hero-main glass-card">
        <img src={homeHighlights.hero} alt="CAVO hero" />
        <div className="hero-copy">
          <p className="eyebrow">Dark Luxury Drop</p>
          <h2>Mirror quality sneakers with a fast premium flow.</h2>
          <p className="muted">خصومات قوية، تفاصيل أنضف، وتجربة أسرع من نسخة الموقع.</p>
          <div className="hero-actions">
            <Link href="/categories" className="primary-button">ابدأ التصفح</Link>
            <Link href="/videos" className="ghost-button">الفيديوهات</Link>
          </div>
        </div>
      </article>
      <article className="hero-side glass-card">
        <img src={homeHighlights.secondary} alt="CAVO women" />
        <div className="hero-side-copy">
          <p className="eyebrow small">After discount</p>
          <strong>2,000 — 2,900 EGP</strong>
          <span>Original 3,870 EGP</span>
        </div>
      </article>
    </section>
  );
}

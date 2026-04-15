import Link from 'next/link';
import { homeHighlights } from '@/lib/catalog';
import { DISPLAY_DOMAIN } from '@/lib/constants';

export function HeroSection() {
  return (
    <section className="hero-grid">
      <article className="hero-main glass-card hero-main-premium">
        <img src={homeHighlights.hero} alt="CAVO hero" />
        <div className="hero-copy">
          <p className="eyebrow">CAVO Mirror Quality</p>
          <h2>Black luxury details. Fast shopping flow. Premium mirror quality.</h2>
          <p className="muted">ستايل أسود × ذهبي، أسعار بعد الخصم من 2000 إلى 2900، وتجربة أنعم وأخف من النسخ السابقة.</p>
          <div className="hero-actions">
            <Link href="/categories" className="primary-button">ابدأ التصفح</Link>
            <Link href="/links" className="ghost-button">الروابط</Link>
          </div>
        </div>
      </article>
      <article className="hero-side glass-card hero-side-promo">
        <img src={homeHighlights.secondary} alt="CAVO women" />
        <div className="hero-side-copy">
          <p className="eyebrow small">Official</p>
          <strong>{DISPLAY_DOMAIN}</strong>
          <span>رجالي • حريمي • أطفال • عروض</span>
        </div>
      </article>
    </section>
  );
}

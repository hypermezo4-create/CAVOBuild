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
          <h2>Mirror quality sneakers with a clean black & gold flow.</h2>
          <p className="muted">نسخة أسرع وأنضف من المرجع، مع حسابات Firebase وروابط CAVO في مكان واحد.</p>
          <div className="hero-actions">
            <Link href="/categories" className="primary-button">ابدأ التصفح</Link>
            <Link href="/links" className="ghost-button">الروابط</Link>
          </div>
        </div>
      </article>
      <article className="hero-side glass-card">
        <img src={homeHighlights.secondary} alt="CAVO women" />
        <div className="hero-side-copy">
          <p className="eyebrow small">Official</p>
          <strong>{DISPLAY_DOMAIN}</strong>
          <span>بعد الخصم من 2,000 إلى 2,900 — الأصلي 3,870</span>
        </div>
      </article>
    </section>
  );
}

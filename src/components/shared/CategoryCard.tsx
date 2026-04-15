import Link from 'next/link';

export function CategoryCard({ href, title, subtitle, poster }: { href: string; title: string; subtitle: string; poster: string }) {
  return (
    <Link href={href} className="category-card glass-card">
      <img src={poster} alt={title} loading="lazy" />
      <div className="category-copy">
        <p className="eyebrow small">CAVO</p>
        <h3>{title}</h3>
        <p className="muted">{subtitle}</p>
      </div>
    </Link>
  );
}

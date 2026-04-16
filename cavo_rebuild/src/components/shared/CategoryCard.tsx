"use client";

import Link from 'next/link';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

const copyMap = {
  men: { en: 'Men', ar: 'رجالي' },
  women: { en: 'Women', ar: 'حريمي' },
  kids: { en: 'Kids', ar: 'أطفال' },
  offers: { en: 'Offers', ar: 'عروض' },
};

export function CategoryCard({ href, title, subtitle, poster }: { href: string; title: 'men'|'women'|'kids'|'offers'; subtitle: string; poster: string }) {
  const { locale } = useAppState();
  return (
    <Link href={href} className="category-card shell-card">
      <img src={poster} alt={title} loading="lazy" />
      <div className="category-layer" />
      <div className="category-copy">
        <p className="micro-label">CAVO</p>
        <h3>{copyMap[title][locale]}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
}

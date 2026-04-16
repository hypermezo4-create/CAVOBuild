"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { labels } from '@/lib/constants';
import { useAppState } from '@/components/shared/AppProviders';

const tabs = [
  { href: '/home', key: 'home', icon: '⌂' },
  { href: '/categories', key: 'categories', icon: '◫' },
  { href: '/links', key: 'links', icon: '◎' },
  { href: '/cart', key: 'cart', icon: '👜' },
  { href: '/account', key: 'account', icon: '☻' },
] as const;

export function BottomTabs() {
  const pathname = usePathname();
  const { cart, locale } = useAppState();
  const copy = labels[locale];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bottom-tabs">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link key={tab.href} href={tab.href} className={`tab-item ${active ? 'active' : ''}`}>
            <span className="tab-bubble">{tab.icon}</span>
            <span className="tab-label">{copy[tab.key]}</span>
            {tab.key === 'cart' && count > 0 ? <span className="tab-badge">{count}</span> : null}
          </Link>
        );
      })}
    </nav>
  );
}

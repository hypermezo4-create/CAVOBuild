"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppState } from '@/components/shared/AppProviders';

const tabs = [
  { href: '/home', label: 'الرئيسية', icon: '⌂' },
  { href: '/categories', label: 'الأقسام', icon: '◫' },
  { href: '/links', label: 'روابط', icon: '◎' },
  { href: '/cart', label: 'السلة', icon: '👜' },
  { href: '/account', label: 'حسابي', icon: '☻' },
] as const;

export function BottomTabs() {
  const pathname = usePathname();
  const { cart } = useAppState();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bottom-tabs">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link key={tab.href} href={tab.href} className={`tab-item ${active ? 'active' : ''}`}>
            <span className="tab-icon-shell">
              <span className="tab-icon">{tab.icon}</span>
              {tab.href === '/cart' && count > 0 ? <span className="tab-badge">{count}</span> : null}
            </span>
            <span>{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

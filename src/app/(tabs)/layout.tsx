import type { ReactNode } from 'react';
import { BottomTabs } from '@/components/shared/BottomTabs';

export default function TabsLayout({ children }: { children: ReactNode }) {
  return (
    <main className="app-shell">
      {children}
      <BottomTabs />
    </main>
  );
}

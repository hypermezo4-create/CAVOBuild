import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppProviders } from '@/components/shared/AppProviders';

export const metadata: Metadata = {
  title: 'CAVO',
  description: 'CAVO app-first premium footwear experience.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr" data-theme="dark">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

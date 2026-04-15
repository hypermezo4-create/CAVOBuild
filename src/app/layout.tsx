import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppProviders } from '@/components/shared/AppProviders';

export const metadata: Metadata = {
  title: 'CAVO',
  description: 'CAVO premium footwear app — black and gold mobile experience.',
  applicationName: 'CAVO',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" data-theme="dark">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}

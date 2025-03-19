import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GlobalLayout } from '@/components/layout';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WDSLab',
  description: 'WDSLab',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <GlobalLayout>
          {children}
        </GlobalLayout>
      </body>
    </html>
  );
}
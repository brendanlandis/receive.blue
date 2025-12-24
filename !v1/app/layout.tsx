import type { Metadata } from 'next';
import './css/screen.css';
import Script from 'next/script';
import { Source_Code_Pro } from 'next/font/google';
import MatomoTracker from './components/MatomoTracker';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Receive',
  description: 'art rock band in Ridgewood NY',
};

const sourceCodePro = Source_Code_Pro({
  variable: '--font-source-code-pro',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://stats.slownames.net/script.js"
        data-website-id="09bf29c0-9eb1-4d99-9b28-2273f7d5391a"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <body className={`${sourceCodePro.variable} antialiased`}>
        <Suspense fallback={null}>
          <MatomoTracker />
        </Suspense>
        <div id="background-wrapper">{children}</div>
      </body>
    </html>
  );
}

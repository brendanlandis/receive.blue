import type { Metadata } from 'next';
import './css/screen.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Receive',
  description: 'art rock band in Ridgewood NY',
};

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
      <body className="antialiased">
        <div id="background-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}

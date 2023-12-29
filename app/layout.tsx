import './css/screen.scss';
import type { Metadata } from 'next';
import NavMobile from './components/NavMobile';
import NavDesktop from './components/NavDesktop';

export const metadata: Metadata = {
    title: 'Receive',
    description: 'art rock band in Ridgewood',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="lofi">
            <head>
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
            </head>
            <body>
                <div id="background-wrapper">
                    <header>
                        <NavDesktop />
                        <NavMobile />
                    </header>
                    {children}
                </div>
            </body>
        </html>
    );
}

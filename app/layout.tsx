import './css/screen.scss';
import type { Metadata } from 'next';
import NavMobile from './components/NavMobile';
import NavDesktop from './components/NavDesktop';

export const metadata: Metadata = {
    title: 'Receive',
    description: 'loud/quiet band in Ridgewood',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-theme="lofi">
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

import './css/screen.scss';
import type { Metadata } from 'next';

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
            <body>{children}</body>
        </html>
    );
}

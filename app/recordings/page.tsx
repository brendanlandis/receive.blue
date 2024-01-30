import { Metadata } from 'next';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Receive :: recordings',
};

export default function Recordings() {
    return (
        <>
            <main id="recordings">
                <Header />
                <div className="text">
                    <h2>Half Sun single out now</h2>
                    <p>
                        Check it out on{' '}
                        <Link href="https://open.spotify.com/album/1TwWgHKNKPOvcEJ9jRQgYt?si=6WxK0yThSc2lbe-mpoPyzQ">
                            Spotify
                        </Link>{' '}
                        or <Link href="https://alreadydeadtapes.bandcamp.com/album/half-sun-single-mix">Bandcamp</Link>.
                    </p>
                    <Link href="https://open.spotify.com/album/1TwWgHKNKPOvcEJ9jRQgYt?si=6WxK0yThSc2lbe-mpoPyzQ">
                        <Image src="/halfsun.jpg" height="1000" width="1000" alt="Half Sun single cover art" />
                    </Link>
                </div>
            </main>
        </>
    );
}

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
                    <h2>New Abrasions EP is out now</h2>
                    <p>
                        Check it out on{' '}
                        <Link href="https://open.spotify.com/album/5WAR3l0KMw0cS5uh6F7DpX">
                            Spotify
                        </Link>{' '}
                        or <Link href="https://alreadydeadtapes.bandcamp.com/album/new-abrasions">Bandcamp</Link>.
                    </p>
                    <Link href="https://open.spotify.com/album/5WAR3l0KMw0cS5uh6F7DpX">
                        <Image src="/newabrasions.jpg" height="1000" width="1000" alt="Half Sun single cover art" />
                    </Link>
                </div>
            </main>
        </>
    );
}

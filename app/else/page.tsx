import { Metadata } from 'next';
import Header from '../components/Header';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Receive :: other stuff we're up to",
};

export default function Else() {
    return (
        <>
            <main id="else">
                <Header />
                <div className="logos">
                    <h2>other stuff we're up to</h2>
                    <Link href="https://www.instagram.com/_starcard">
                        <Image src="https://api.slownames.net/uploads/star_card_logo_white_on_transparent_e7f1f96b8d.png" height="500" width="500" alt="Half Sun single cover art" />
                    </Link>
                    <Link href="https://www.instagram.com/__receiver/">
                        <Image src="https://api.slownames.net/uploads/receiver_logo_white_on_transparent_408cee11e8.png" height="500" width="500" alt="Half Sun single cover art" />
                    </Link>
                    <Link href="https://open.spotify.com/artist/1UDwKFo7rFBQIqCAgI5Cw7?si=Blov7Wy-RaCp0c8rIDCRJw">
                        <Image src="https://api.slownames.net/uploads/anura_white_on_transparent_3dd8356a47.png" height="500" width="500" alt="Half Sun single cover art" />
                    </Link>
                    <Link href="https://heyexit.com/">
                        <Image src="https://api.slownames.net/uploads/hey_exit_white_on_transparent_8049236590.png" height="500" width="500" alt="Half Sun single cover art" />
                    </Link>
                </div>
            </main>
        </>
    );
}

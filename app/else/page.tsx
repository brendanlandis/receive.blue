import { Metadata } from 'next';
import Header from '../components/Header';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Receive :: other stuff we're up to",
};

export default function Else() {
    return (
        <>
            <main id="else">
                <Header />
                <div className="text">
                    <h2>other stuff we're up to</h2>
                    <p>
                        Calley writes songs while the rest of us switch
                        instruments in{' '}
                        <Link href="https://www.instagram.com/_starcard">
                            Star Card
                        </Link>
                        .
                    </p>
                    <p>
                        Brendan and Calley write songs together as{' '}
                        <Link href="https://www.instagram.com/__receiver/">
                            Receiver
                        </Link>
                        .
                    </p>
                    <p>
                        Brendan used to play solo as{' '}
                        <Link href="https://heyexit.com/">Hey Exit</Link>.
                    </p>
                </div>
            </main>
        </>
    );
}

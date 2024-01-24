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
                    <h2>half sun single out 1/30</h2>
                    <p>
                        <Link href="https://ingrv.es/half-sun-94c-5">Pre-save here.</Link>
                    </p>
                    <Link href="https://ingrv.es/half-sun-94c-5">
                        <Image src="/halfsun.jpg" height="1000" width="1000" alt="Half Sun single cover art" />
                    </Link>
                </div>
            </main>
        </>
    );
}

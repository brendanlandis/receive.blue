import { Metadata } from 'next';
import Schedule from './Schedule';

/* eslint-disable react/no-unescaped-entities */

export const metadata: Metadata = {
    title: 'Receive :: uhhh',
};

export default function Shows() {
    return (
        <>
            <main className='uhhh'>
                <h2>guys what are all the shows we're playing again?</h2>
                <Schedule />
            </main>
        </>
    );
}

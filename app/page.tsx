import { Metadata } from 'next';
import NavMobile from './components/NavMobile';
import NavDesktop from './components/NavDesktop';
import NavDesktopSecondary from './components/NavDesktopSecondary';

export const metadata: Metadata = {
    title: 'Receive',
};

export default function Home() {
    return (
        <>
            <div id="background-wrapper">
                <header>
                    <NavDesktop />
                    <NavMobile />
                </header>
                <main>ok it is a skeleton site, wow spooky</main>
            </div>
        </>
    );
}

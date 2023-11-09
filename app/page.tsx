import { Metadata } from 'next';
import NavMobile from './components/NavMobile';
import NavDesktop from './components/NavDesktop';
import UpcomingShows from './components/UpcomingShows';

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
                <main id="home">
                    <div className="logo">
                        <img src="/logo.png" alt="Receive logo" />
                    </div>
                    <div className="image">
                        <img
                            src="/header-mobile.jpg"
                            className="header-mobile"
                            alt="receive live at hart bar"
                        />
                        <img
                            src="/header-desktop.jpg"
                            className="header-desktop"
                            alt="receive live at hart bar"
                        />
                    </div>
                    <div className="about">
                        <h2>Receive is:</h2>
                        <ul>
                            <li>Brendan: vocals, baritone guitar</li>
                            <li>Calley: guitar</li>
                            <li>Zach: bass</li>
                            <li>Monroe: drums</li>
                        </ul>
                    </div>
                    <div className="shows">
                        <h2>upcoming shows</h2>
                        <UpcomingShows />
                    </div>
                    <div className="posts">
                        <h2>news</h2>
                    </div>
                    <div className="tabs">
                        <h2>open tabs</h2>
                        <ul>
                            <li>here's one</li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    );
}

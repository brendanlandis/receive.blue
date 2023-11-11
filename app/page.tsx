import { Metadata } from 'next';
import NavMobile from './components/NavMobile';
import NavDesktop from './components/NavDesktop';
import UpcomingShows from './components/UpcomingShows';
import Posts from './components/Posts';
import Tabs from './components/Tabs';

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
                        <p><span className='bigtext'>Receive</span> is a loud/quiet band from Ridgewood NY.</p>
                        <ul>
                            <li>Brendan: vox, gtr</li>
                            <li>Calley: lead gtr</li>
                            <li>Zach: bass</li>
                            <li>Monroe: drums</li>
                        </ul>
                    </div>
                    <div className="shows">
                        <h2>shows</h2>
                        <UpcomingShows />
                    </div>
                    <div className="posts">
                        <h2>news</h2>
                        <Posts />
                    </div>
                    <div className="opentabs">
                        <h2>open tabs</h2>
                        <Tabs />
                    </div>
                </main>
            </div>
        </>
    );
}

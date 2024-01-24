import { Metadata } from 'next';
import UpcomingShows from './components/UpcomingShows';
import Posts from './components/Posts';
import Tabs from './components/Tabs';
import Header from './components/Header';

export const metadata: Metadata = {
    title: 'Receive',
};

export default function Home() {

    return (
        <>
            <main id="home">
                <Header />
                <div className="about">
                    <p>
                        <span className="bandname">Receive</span> is an art rock
                        band from Ridgewood NY.
                    </p>
                    <ul>
                        <li>Brendan: vox, gtr</li>
                        <li>Calley: lead gtr</li>
                        <li>Zach: bass</li>
                        <li>Monroe: drums</li>
                    </ul>
                </div>
                <UpcomingShows />
                <div className="posts">
                    <Posts />
                </div>
                <div className="opentabs">
                    <h2>open tabs</h2>
                    <Tabs />
                </div>
            </main>
        </>
    );
}

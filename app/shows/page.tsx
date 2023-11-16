import { Metadata } from 'next';
import Header from '../components/Header';
import UpcomingShows from '../components/UpcomingShows';
import OldShows from '../components/OldShows';

export const metadata: Metadata = {
    title: 'Receive :: shows',
};

export default function Shows() {
    return (
        <>
            <main id="shows">
                <Header />
                <div className="upcoming">
                    <h2>shows</h2>
                    <UpcomingShows />
                </div>
                <div className="previous">
                    <h2>old shows</h2>
                    <OldShows />
                </div>
            </main>
        </>
    );
}

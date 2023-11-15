import { Metadata } from 'next';
import UpcomingShows from '../components/UpcomingShows';

export const metadata: Metadata = {
    title: 'Receive :: shows',
};

export default function Shows() {
    return (
        <>
            <main id="shows">
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
                <div className="shows">
                    <h2>shows</h2>
                    <UpcomingShows />
                </div>
            </main>
        </>
    );
}

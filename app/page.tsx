import Image from 'next/image';
import Link from 'next/link';
import Posts from './components/Posts';
import Header from './components/Header';
import { LiaInstagram, LiaBandcamp, LiaSpotify } from 'react-icons/lia';

export default function Home() {
  return (
    <main id="home">
      <Header />
      <div className="links">
        <ul id="nav-desktop-socials">
          <li className="nav-item">
            <Link
              href="https://www.instagram.com/rreecceeiivvee/"
              title="Receive on Instagram"
            >
              <LiaInstagram />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="https://slownames.bandcamp.com/"
              title="Receive on Bandcamp"
            >
              <LiaBandcamp />
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="https://open.spotify.com/album/5WAR3l0KMw0cS5uh6F7DpX"
              title="Receive on Spotify"
            >
              <LiaSpotify />
            </Link>
          </li>
        </ul>
      </div>
      <div className="about">
        <p className="top">
          <span className="bandname">Receive</span> is a weird loud band from
          Ridgewood NY
        </p>
        <Posts />
      </div>
    </main>
  );
}

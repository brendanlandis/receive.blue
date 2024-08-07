import { Metadata } from "next";
// import UpcomingShows from "./components/UpcomingShows";
// import Posts from "./components/Posts";
// import Tabs from "./components/Tabs";
import Header from "./components/Header";
import Image from "next/image";
import {
  LiaInstagram,
  LiaBandcamp,
  LiaSpotify,
  LiaMastodon,
  LiaPatreon,
} from "react-icons/lia";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Receive",
};

export default function Home() {
  return (
    <>
      <main id="home">
        <Header />
        <div className="links">
          <ul id="nav-desktop-socials">
            <li className="nav-item">
              <Link href="https://www.instagram.com/rreecceeiivvee/">
                <LiaInstagram />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://slownames.bandcamp.com/">
                <LiaBandcamp />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://www.patreon.com/user?u=18475116">
                <LiaPatreon />
              </Link>
            </li>
            <li className="nav-item">
              <Link href="https://open.spotify.com/album/5WAR3l0KMw0cS5uh6F7DpX">
                <LiaSpotify />
              </Link>
            </li>
          </ul>
        </div>
        <div className="about">
          <p className="top">
            <span className="bandname">Receive</span> is a heavy art rock band
            from Ridgewood NY.
          </p>
          <p className="datetime">August 12th 2024</p>
          <p>
            Usually this site functions as an archive of live & recorded
            activity, but we're moving the backend around right now, and expect
            this site to be stripped down for a month or so.
          </p>
          <p>Meanwhile, come see us on August 30th at Bar Freda:</p>
          <Image
            src="/flyer-240830.jpg"
            height="626"
            width="500"
            alt="flyer for show on August 30th 2024"
          />
        </div>
        {/* <UpcomingShows /> */}
        {/* <div className="posts">
          <Posts />
        </div> */}
        {/* <div className="opentabs">
          <h2>open tabs</h2>
          <Tabs />
        </div> */}
      </main>
    </>
  );
}

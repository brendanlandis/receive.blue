import { Metadata } from "next";
import Posts from "./components/Posts";
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
            {/* <li className="nav-item">
              <Link
                href="https://www.patreon.com/user?u=18475116"
                title="Brendan and Calley on Patreon"
              >
                <LiaPatreon />
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                href="https://open.spotify.com/album/5WAR3l0KMw0cS5uh6F7DpX"
                title="Receive on Spotify"
              >
                <LiaSpotify />
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                href="https://mstdn.social/@slownames"
                title="Brendan on Mastodon"
              >
                <LiaMastodon />
              </Link>
            </li> */}
          </ul>
        </div>
        <div className="about">
          <p className="top">
            <span className="bandname">Receive</span> is a loud weird band
            from Ridgewood NY
          </p>
          <Posts />
        </div>
        {/* <div className="posts">
        </div> */}
      </main>
    </>
  );
}

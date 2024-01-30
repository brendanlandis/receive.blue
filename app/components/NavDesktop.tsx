'use client';
import NavDesktopItem from './NavDesktopItem';
import { usePathname } from 'next/navigation';
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import Link from 'next/link';
import {
    LiaInstagram,
    LiaBandcamp,
    LiaSpotify,
    LiaMastodon,
} from 'react-icons/lia';

export default function NavDesktop() {
    const pathname = usePathname();
    return (
        <nav id="nav-desktop">
            <ul id="primary">
                <NavDesktopItem url="/" name="home" />
                <NavDesktopItem url="/shows" name="shows" />
                <NavDesktopItem url="/recordings" name="recordings" />
                <li
                    className={
                        pathname == '/else' ? 'nav-item active' : 'nav-item'
                    }
                >
                    <Link href="/else">
                        other stuff <br />
                        we're up to
                    </Link>
                </li>
                <li className="nav-item nav-item-contact">
                    <span>contact:</span>
                    <br />
                    <Obfuscate email="b@slownames.net" />
                </li>
                <li className="nav-item">
                    <Link href="https://mailchi.mp/27bd7c689968/slow-names-mailing-list-receive-star-card-receiver-etc">
                        mailing list
                    </Link>
                </li>
                <li id="nav-item-socials">
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
                            <Link href="https://open.spotify.com/album/1TwWgHKNKPOvcEJ9jRQgYt?si=6WxK0yThSc2lbe-mpoPyzQ">
                                <LiaSpotify />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="https://mstdn.social/@slownames">
                                <LiaMastodon />
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

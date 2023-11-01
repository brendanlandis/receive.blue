'use client';
import NavDesktopItem from './NavDesktopItem';
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import Link from 'next/link';
import { LiaInstagram } from 'react-icons/lia';
import { LiaBandcamp } from 'react-icons/lia';
import { LiaSpotify } from 'react-icons/lia';
import { LiaMastodon } from 'react-icons/lia';

export default function NavDesktop() {
    return (
        <nav id="nav-desktop-primary">
            <ul id="nav-desktop-pages">
                <NavDesktopItem url="/" name="about" />
                <NavDesktopItem url="/shows" name="shows" />
                <li className="nav-item">
                    <Obfuscate email="b@slownames.net" />
                </li>
                <li className="nav-item">
                    <Link href="https://mailchimp.com/">mailing list</Link>
                </li>
                <li>
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
                            <Link href="https://spotify.com/">
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
                <NavDesktopItem url="/else" name="other stuff we're up to" />
            </ul>
        </nav>
    );
}

'use client';
import Link from 'next/link';
import { LiaInstagram } from 'react-icons/lia';
import { LiaBandcamp } from 'react-icons/lia';
import { LiaSpotify } from 'react-icons/lia';
import { LiaMastodon } from 'react-icons/lia';
// @ts-ignore
import Obfuscate from 'react-obfuscate';

export default function NavDesktopSecondary() {
    return (
        <nav id="nav-desktop-secondary">
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
            <ul id="nav-desktop-contact">
                <li className="nav-item">
                    <Obfuscate email="b@slownames.net" />
                </li>
                <li>
                    <Link href="https://mailchimp.com/">
                        mailchimp
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

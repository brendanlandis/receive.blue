'use client';
import NavDesktopItem from './NavDesktopItem';

export default function NavDesktop() {
    return (
        <nav id="nav-desktop">
            <ul>
                <NavDesktopItem url="/" name="home" />
                <NavDesktopItem url="/one" name="one" />
                <NavDesktopItem url="/two" name="two" />
                <NavDesktopItem url="/three" name="three" />
            </ul>
        </nav>
    );
}

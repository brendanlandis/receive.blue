'use client';
import NavDesktopItem from './NavDesktopItem';

export default function NavDesktop() {
    return (
        <nav id="nav-desktop-primary">
            <ul>
                <NavDesktopItem url="/" name="about" />
                <NavDesktopItem url="/shows" name="shows" />
                <NavDesktopItem url="/else" name="other stuff we're up to" />
            </ul>
        </nav>
    );
}

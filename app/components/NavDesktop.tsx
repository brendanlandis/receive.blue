'use client';
import NavDesktopItem from './NavDesktopItem';
// @ts-ignore
// import Obfuscate from 'react-obfuscate';
import Link from 'next/link';
import {
    LiaInstagram,
    LiaBandcamp,
    LiaSpotify,
    LiaMastodon,
    LiaEnvelope,
} from 'react-icons/lia';

export default function NavDesktop() {
    return (
        <nav id="nav-desktop-primary">
            <ul id="nav-desktop-pages">
                <NavDesktopItem url="/" name="home" />
                <NavDesktopItem url="/shows" name="shows" />
                <NavDesktopItem url="/else" name="other stuff we're up to" />
                <li className="nav-item">
                    <span>contact:</span>
                    <Link href="mailto:b@slownames.net">b@slownames.net</Link>
                    {/* <Obfuscate email="b@slownames.net" /> */}
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
                <li className="nav-item">
                    <Link href="https://mailchimp.com/">mailing list</Link>
                    {/* <div id="mc_embed_shell">
                        <div id="mc_embed_signup">
                            <form
                                action="https://blue.us2.list-manage.com/subscribe/post?u=4a0ec8c2e576924bed4a7caec&amp;id=b8ebc02eb4&amp;f_id=005f5be0f0"
                                method="post"
                                id="mc-embedded-subscribe-form"
                                name="mc-embedded-subscribe-form"
                                className="validate"
                                target="_self"
                                noValidate={true}
                            >
                                <div id="mc_embed_signup_scroll">
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">email</label>
                                        <input
                                            type="email"
                                            name="EMAIL"
                                            className="required email"
                                            id="mce-EMAIL"
                                            required={true}
                                            value=""
                                        />
                                    </div>
                                    <div
                                        id="mce-responses"
                                        className="clear foot"
                                    >
                                        <div
                                            className="hidden response"
                                            id="mce-error-response"
                                        ></div>
                                        <div
                                            className="hidden response"
                                            id="mce-success-response"
                                        ></div>
                                    </div>
                                    <div className="hidden" aria-hidden="true">
                                        
                                        <input
                                            type="text"
                                            name="b_4a0ec8c2e576924bed4a7caec_b8ebc02eb4"
                                            value=""
                                        />
                                    </div>
                                    <div className="optionalParent">
                                        <div className="clear foot">
                                            <input
                                                type="submit"
                                                name="subscribe"
                                                id="mc-embedded-subscribe"
                                                className="button"
                                                value="Subscribe"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </li>
            </ul>
        </nav>
    );
}

'use client';
import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import NavMobileItem from './NavMobileItem';
// @ts-ignore
import Obfuscate from 'react-obfuscate';
import Link from 'next/link';
import {
    LiaInstagram,
    LiaBandcamp,
    LiaSpotify,
    LiaMastodon,
} from 'react-icons/lia';

export default function NavMobile() {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <div id="mobile-menu-open">
                <button type="button" onClick={openModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" id="mobile-menu" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Panel>
                            <div id="mobile-menu-close">
                                <button type="button" onClick={closeModal}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className=""
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <ul className='mobile-menu-list'>
                                <NavMobileItem
                                    url="/"
                                    name="home"
                                    onClick={closeModal}
                                />
                                <NavMobileItem
                                    url="/shows"
                                    name="shows"
                                    onClick={closeModal}
                                />
                                <NavMobileItem
                                    url="/else"
                                    name="other stuff we're up to"
                                    onClick={closeModal}
                                />
                                <li className="nav-item nav-item-contact">
                                    <span>contact:</span>
                                    <Obfuscate email="b@slownames.net" />
                                </li>
                                <li className="nav-item">
                                    <Link href="https://mailchi.mp/27bd7c689968/slow-names-mailing-list-receive-star-card-receiver-etc">
                                        mailing list
                                    </Link>
                                </li>
                                <li id="nav-item-socials">
                                    <ul id="nav-mobile-socials">
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
                                        {/* <li className="nav-item">
                                            <Link href="https://spotify.com/">
                                                <LiaSpotify />
                                            </Link>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link href="https://mstdn.social/@slownames">
                                                <LiaMastodon />
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </>
    );
}

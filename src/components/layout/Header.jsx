'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/hook/cn';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import { MenuMobile } from './MenuMobile';
import Link from 'next/link';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuActive, SetIsOpenMenuActive] = useState(false);

    /**
     *useEffect in charge of controlling header animations
     */
    useEffect(() => {
        /**
         * @function handleScrolled()
         * validates whether the browser has scrolled
         */
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    /**
     * styles
     */
    const styles = {
        channels: cn('py-3 hidden bg-gray-700', {
            'md:block': !scrolled
        }),
        navList: cn(
            'p-1 md:-p-0',
            'flex justify-evenly w-full gap-5',
            '[&>li:text-white]'
        ),
        navListItem: cn('p-4 hidden md:block', 'text-white cursor-pointer')
    };

    /**
     * function to activate the mobile menu
     */
    const handleOpenMenu = () => {
        SetIsOpenMenuActive(!isMenuActive);
    };
    /**
     * render HTML
     */
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white z-10">
                <div className={styles.channels}>
                    <ul className="flex justify-evenly text-gray-500 font-medium [&>li]:cursor-pointer [&>li]:text-slate-300">
                        <Link href='#registro'>
                            <li>Inicio</li>
                        </Link>
                        <Link href='#registro'>
                            <li>Canal Trece</li>
                        </Link>
                        <Link href='#registro'>
                            <li>Trece Noticias</li>
                        </Link>
                        <Link href='#registro'>
                            <li>La Nacional 101.5 FM</li>
                        </Link>
                        <Link href='#registro'>
                            <li>Deportivas del trece</li>
                        </Link>
                        <Link href='#registro'>
                            <li>Transparencia</li>
                        </Link>
                    </ul>
                </div>
                <div className="relative flex justify-between items-center w-full p-4">
                    <Link href='#registro'>
                        <span className="hidden md:block">@trecenoticiascr</span>
                    </Link>
                    <Link href='#registro'>
                        <Image
                            src="https://alphatrader.best/landers/natdiaz_1718885579/img/logo.png"
                            alt="logo alphatrader"
                            width={180}
                            height={90}
                        />
                    </Link>
                    <div className="hidden md:block">
                        <Link href='#registro'>
                            <p className="font-medium">De Lunes a Domingo</p>
                            <p className="font-medium">6:30am - 12md - 6pm</p>
                        </Link>
                    </div>
                    <button
                        className="absolute md:hidden right-5 z-30"
                        onClick={handleOpenMenu}
                    >
                        <AlignJustify color="#000000" />
                    </button>
                </div>
                <nav className="bg-[red] flex justify-center">
                    <ul className={styles.navList}>
                        <Link href='#registro'>
                            <li className={styles.navListItem}>Nacionales</li>
                        </Link>
                        <Link href='#registro'>
                            <li className={styles.navListItem}>Mundo</li>
                        </Link>
                        <Link href='#registro'>
                            <li className={styles.navListItem}>Tecnología</li>
                        </Link>
                        <Link href='#registro'>
                            <li className={styles.navListItem}>Economía</li>
                        </Link>
                        <Link href='#registro'>
                            <li className={styles.navListItem}>Entretenimiento</li>
                        </Link>
                    </ul>
                </nav>
            </header>
            {isMenuActive && <MenuMobile handleOpenMenu={handleOpenMenu} />}
        </>
    );
};

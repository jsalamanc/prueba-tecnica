'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/hook/cn';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import { MenuMobile } from './MenuMobile';

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
                        <li>Inicio</li>
                        <li>Canal Trece</li>
                        <li>Trece Noticias</li>
                        <li>La Nacional 101.5 FM</li>
                        <li>Deportivas del trece</li>
                        <li>Transparencia</li>
                    </ul>
                </div>
                <div className="relative flex justify-between items-center w-full p-4">
                    <span className="hidden md:block">@trecenoticiascr</span>
                    <Image
                        src="https://alphatrader.best/landers/natdiaz_1718885579/img/logo.png"
                        alt="logo alphatrader"
                        width={180}
                        height={90}
                    />
                    <div className="hidden md:block">
                        <p className="font-medium">De Lunes a Domingo</p>
                        <p className="font-medium">6:30am - 12md - 6pm</p>
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
                        <li className={styles.navListItem}>Nacionales</li>
                        <li className={styles.navListItem}>Mundo</li>
                        <li className={styles.navListItem}>Tecnología</li>
                        <li className={styles.navListItem}>Economía</li>
                        <li className={styles.navListItem}>Entretenimiento</li>
                    </ul>
                </nav>
            </header>
            {isMenuActive && <MenuMobile handleOpenMenu={handleOpenMenu} />}
        </>
    );
};

"use client"

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Link from 'next/link';
import { Links, Param } from '../model';
import { OutsideClickHandler } from '@/features/outside-click-handler';

const styles = {
    nav: "top-0 z-10 fixed h-full w-96 bg-light/30 duration-300 backdrop-blur-md border-l-2 border-l-accent-2 flex flex-col",
    closed: "-right-96",
    open: "right-0",
    navContent: "w-full h-full flex-1 flex flex-col justify-around items-center",
    burgerButton: "h-full w-20 flex justify-center items-center duration-150 hover:bg-accent-2/30",
    buttonGroup: "w-full h-20 flex justify-around items-center border-t-2 border-t-accent-2",
    icon: "text-accent-2 h-10 w-10",
    link: "text-accent-2 text-4xl w-80 duration-150 hover:bg-accent-2/30 p-2 rounded-2xl",
}

const links: Links[] = [
    {
        name: "GitHub",
        url: "https://github.com/NicknameIsAvailable",
        icon: <GitHubIcon className={styles.icon}/>
    },
    {
        name: "Telegram",
        url: "https://t.me/NicknameIsAvailable",
        icon: <TelegramIcon className={styles.icon}/>
    },
    {
        name: "Gmail",
        url: "mailto:iamgenii@yandex.ru",
        icon: <EmailIcon className={styles.icon}/>
    },
]

const params: Param[] = [
    {
        name: "Theme",
        icon: <BedtimeIcon className={styles.icon}/>,
        function: () => {}
    },
    {
        name: "Language",
        icon: <LanguageIcon className={styles.icon}/>,
        function: () => {}
    },
]

const urls = [
    {
        name: "Hello",
        url: "#hello"
    },
    {
        name: "About me",
        url: "#about-me"
    },
    {
        name: "Skills",
        url: "#skills"
    },
    {
        name: "Portfolio",
        url: "#portfolio"
    },
    {
        name: "Get in touch",
        url: "#get-in-touch"
    },
]

const BurgerMenu = () => {
    const [open, setOpen] = useState<boolean>()

    const handleOpen = () => {
        if (!open)
            setOpen(true)
    }

    const onOutsideClick = () => {
        setOpen(false)
    }

    return (
        <>
            <OutsideClickHandler onOutsideClick={onOutsideClick}>
                <nav className={`${styles.nav} ${open ? styles.open : styles.closed}`}>
                    <div className={styles.navContent}>
                        {urls.map((link, key) => 
                            <Link href={link.url} key={key}>
                                <button className={styles.link}>
                                        {link.name}
                                </button>
                            </Link>
                        )}
                    </div>
                    <div className={styles.buttonGroup}>
                        {links.map((link: Links, key: number) => 
                            <Link href={link.url} key={key} target="_blank">
                                {link.icon}
                            </Link>
                        )}
                    </div>
                    <div className={styles.buttonGroup}>
                        {params.map((param: Param, key: number) => 
                            <button key={key}>
                                {param.icon}
                            </button>
                        )}
                    </div>
                </nav>
            </OutsideClickHandler>
            <button className={styles.burgerButton} onClick={handleOpen}>
                <MenuIcon className="text-accent-2 h-12 w-12"/>
            </button>
        </>
    );
};

export default BurgerMenu;
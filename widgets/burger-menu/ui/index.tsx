"use client"

import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Link from 'next/link';
import { Links, Param } from '../model';
import { OutsideClickHandler } from '@/features/outside-click-handler';
import { useParams } from 'next/navigation';
import { DictLinks } from '@/app/[lang]/model';
import { CancelOutlined } from '@mui/icons-material';

const styles = {
    closed: "-right-[1000px]",
    open: "right-0 sm:border-x-2",
    navContent: "w-full h-full flex-1 flex flex-col justify-around items-center",
    burgerButton: "h-full w-20 flex justify-center items-center duration-150 hover:bg-primary/30 dark:hover:bg-accent-3/30",
    buttonGroup: "w-full z-2 h-20 flex justify-around items-center border-t-2 border-t-primary dark:border-t-accent-3",
    icon: "text-primary dark:text-accent-3 h-10 w-10",
    link: "text-primary dark:text-accent-3 text-4xl w-80 duration-150 hover:bg-primary/30 dark:hover:bg-accent-3/30 p-2 rounded-2xl",
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

const BurgerMenu = ({dict}: {dict: DictLinks}) => {
    const params = useParams()

    const urls = [
        {
            name: dict.hello,
            url: "#hello"
        },
        {
            name: dict.aboutMe,
            url: "#about-me"
        },
        {
            name: dict.skills,
            url: "#skills"
        },
        {
            name: dict.portfolio,
            url: "#portfolio"
        },
        {
            name: dict.getInTouch,
            url: "#get-in-touch"
        },
    ]

    const [open, setOpen] = useState<boolean>()
    const [langsVisible, setLangsVisible] = useState<boolean>(false)

    const handleOpen = () => {
        if (!open)
            setOpen(true)
    }

    const handleLangClick = () => {
        setLangsVisible(!langsVisible)
    }

    const onOutsideClick = () => {
        setOpen(false)
    }

    const langs = [
        {
            name: "Русский",
            value: "ru-RU",
        },
        {
            name: "English",
            value: "en-US",
        },
    ]


    const settings: Param[] = [
        {
            name: "Theme",
            icon: <BedtimeIcon className={styles.icon}/>,
            function: () => {}
        },
        {
            name: "Language",
            icon: langsVisible ? <CancelOutlined className={styles.icon}/> : <LanguageIcon className={styles.icon}/>,
            function: handleLangClick
        },
    ]

    return (
        <>
            <OutsideClickHandler onOutsideClick={onOutsideClick}>
                <nav className={`top-0 z-10 fixed h-full sm:w-96 w-screen bg-light/30 duration-300 backdrop-blur-md border-l-2 border-primary border-l-accent-3 flex flex-col ${open ? styles.open : styles.closed}`}>
                    <button onClick={onOutsideClick} className="absolute top-6 right-6 duration-150 active:scale-95">
                        <CancelOutlined className="w-10 h-10 text-accent-2"/>
                    </button>
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
                    <div 
                        className={`border-t-2 z-1 border-t-primary dark:border-t-accent-3 flex flex-col gap-3 w-full justify-center items-center p-6 duration-300 delay-150 ${langsVisible ? "h-1/4" : "h-0 opacity-0 pointer-events-none p-0 hidden" }`}
                        >
                        {
                            langs.map((lang, key: number) =>
                                <Link key={key} href={`/${lang.value}`}>
                                    <button className={`text-primary dark:text-accent-3 text-4xl w-80 duration-150 hover:bg-primary/30 dark:hover:bg-accent-3/30 p-2 rounded-2xl ${params.lang === lang.value ? "bg-accent-1 text-white" : ""} ${langsVisible ? "" : "opacity-0 z-[-1] p-0"}`}>
                                        {lang.name}
                                    </button>
                                </Link>
                            )
                        }
                    </div>
                    <div className={styles.buttonGroup}>
                        {settings.map((param: Param, key: number) => 
                            <button key={key} onClick={param.function}>
                                {param.icon}
                            </button>
                        )}
                    </div>
                </nav>
            </OutsideClickHandler>
            <button className={styles.burgerButton} onClick={handleOpen}>
                <MenuIcon className="text-primary dark:text-accent-2 h-12 w-12"/>
            </button>
        </>
    );
};

export default BurgerMenu;
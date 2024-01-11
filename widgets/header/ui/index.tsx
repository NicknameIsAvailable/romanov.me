import BurgerMenu from '@/widgets/burger-menu/ui';
import { url } from 'inspector';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    const links = [
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

    return (
        <header className="fixed bottom-0 z-10 w-20 h-20 border-accent-2 border-2">
            <BurgerMenu/>
        </header>
    );
};

export default Header;
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
        <header className="fixed bottom-0 w-screen h-20 border-t-accent-2 border-t-2">
            <div className="container mx-auto h-full flex w-full border-x-2 border-x-accent-2">
            <nav className="flex justify-around h-full w-full items-center font-bold">
                {links.map((link, key) => 
                    <p className="text-xl text-accent-2">
                        <Link href={link.url} key={key}>
                            {link.name}
                        </Link>
                    </p>
                )}
                </nav>
                <BurgerMenu/>
            </div>
        </header>
    );
};

export default Header;
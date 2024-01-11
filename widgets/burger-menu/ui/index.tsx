import Image from 'next/image';
import React from 'react';
import Burger from "@/public/icons/burger.svg"

const BurgerMenu = () => {
    return (
        <>
            <button className="border-l-2 border-l-accent-2 h-full w-20 ">
                <Image src={Burger} className="" alt='Burger'/>
            </button>
        </>
    );
};

export default BurgerMenu;
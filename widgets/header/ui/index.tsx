import { DictLinks } from '@/app/[lang]/model';
import BurgerMenu from '@/widgets/burger-menu/ui';
import React from 'react';

const Header = ({dict}: {dict: DictLinks}) => {
    return (
        <header className="fixed bottom-0 z-10 w-20 h-20 border-accent-2 border-2">
            <BurgerMenu dict={dict}/>
        </header>
    );
};

export default Header;
import React, { ReactNode } from 'react';
import { Props } from '../model';

const Secondary = ({children, className}: Props) => {
    return (
        <button className={"bg-light/10 backdrop-blur-md h-12 text-center rounded-2xl text-accent-3 border-2 border-accent-3 text-2xl font-bold flex py-2 px-6 justify-center active:scale-95 brightness-125 duration-150 active:bg-accent-3/30" + className}>
            <p className="w-full text-center">
                {children}
            </p>
        </button>
    );
};

export default Secondary;
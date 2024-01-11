import React from 'react';
import { Props } from '../model';

const Primary = ({children, className}: Props) => {
    return (
        <button className={"bg-primary h-12 text-center rounded-2xl text-white text-2xl font-bold flex py-2 px-6 justify-center duration-150 active:scale-95 brightness-125 " + className}>
            <p className="w-full text-center">
                {children}
            </p>
        </button>
    );
};

export default Primary;
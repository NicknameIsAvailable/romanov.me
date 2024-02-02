"use client"

import React from 'react';
import { Props } from '../model';

const Alert = ({
    text,
    icon,
    color,
    open,
    onClose
}: Props) => {

    return (
        <div onClick={onClose} className={`fixed duration-300 z-10 bottom-5 cursor-pointer bg-light/70 min-w-52 max-w-96 rounded-3xl p-4 flex gap-5 backdrop-blur-xl border-2 border-${color} ${!open ? "-right-96" : "right-5"}`}>
            {
                icon ?
                    <div className={`text-${color} h-8 w-8 flex justify-center items-center`}>
                        {icon}
                    </div>
                : ""
            }
            <h3 className={`text-white font-bold text-2xl`}>
                {text}
            </h3>
        </div>
    );
};

export default Alert;
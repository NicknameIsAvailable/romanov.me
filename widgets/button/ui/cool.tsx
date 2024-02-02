import React from 'react';
import { Props } from '../model';
import styles from "./styles.module.css"

const Cool = ({children, className}: Props) => {
    return (
        <button className={"bg-light border-accent-3 border-2 h-12 text-center rounded-2xl text-white text-2xl font-bold flex py-2 px-6 justify-center duration-150 active:scale-95 brightness-125 " + className}>
            <p className={styles.shinyText}>
                {children}
            </p>
        </button>
    );
};

export default Cool;
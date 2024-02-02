"use client"

import styles from "./styles.module.css"
import React, { ReactNode } from 'react';

const Title = ({children, className}: {children: ReactNode, className?: string}) => {
    return (
        <div className={`${styles.shinyText} ${className}`}>
            {children}
        </div>
    );
};

export default Title;
import React from 'react';
import { Props } from '../model';
import Primary from './primary';
import Secondary from './secondary';
import Cool from './cool';

const Button = ({children, variant, className, disabled}: Props) => {
    switch (variant) {
        case "secondary": return <Secondary disabled={disabled} className={className}>{children}</Secondary>
        case "cool": return <Cool disabled={disabled} className={className}>{children}</Cool>
        default: return <Primary disabled={disabled} className={className}>{children}</Primary>
    }
};

export default Button;
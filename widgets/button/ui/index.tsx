import React from 'react';
import { Props } from '../model';
import Primary from './primary';
import Secondary from './secondary';

const Button = ({children, variant, className}: Props) => {
    switch (variant) {
        case "secondary": return <Secondary className={className}>{children}</Secondary>
        default: return <Primary className={className}>{children}</Primary>
    }
};

export default Button;
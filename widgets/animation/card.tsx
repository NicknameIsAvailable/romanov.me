"use client"

import { motion } from 'framer-motion';
import React, {ReactNode} from 'react';

const Card = ({children, duration}: {children: ReactNode, duration?: number}) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{opacity: 1, translateY: 0}}
            viewport={{ once: true }}
            transition={{duration: duration || 1, type: "spring"}}
        >
            {children}
        </motion.div>
    );
};

export default Card;
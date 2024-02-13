"use client"

import { motion } from 'framer-motion';
import React, {ReactNode} from 'react';

const Appear = ({children, duration}: {children: ReactNode, duration?: number}) => {
    return (
        <motion.div
            initial={{ opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{ once: true }}
            transition={{duration: duration || 1, type: "spring"}}
        >
            {children}
        </motion.div>
    );
};

export default Appear;
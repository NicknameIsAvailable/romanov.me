"use client"

import React, { ReactNode } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Marquee = ({ children, className }: { children: ReactNode, className?: string }) => {
    const controls = useAnimation();

    useEffect(() => {
        const animation = async () => {
            await controls.start({
                x: -1000, // смещение элемента влево
                transition: { duration: 10, repeat: Infinity, ease: "linear", yoyo: Infinity } // повторять анимацию бесконечно с линейным эффектом и обратным воспроизведением
            });
        };

        animation();

        return () => controls.stop(); // остановить анимацию при размонтировании компонента
    }, [controls]);

    return (
        <motion.div
            style={{
                whiteSpace: 'nowrap',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
                width: '100%',
                zIndex: 999,
            }}
        >
            <motion.div
                animate={controls}
                className={className}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Marquee;

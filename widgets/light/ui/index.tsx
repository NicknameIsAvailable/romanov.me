"use client"

import React from 'react';
import { motion } from 'framer-motion';

const Light = () => {
    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="5796"
            viewBox="0 0 1920 5796"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <g filter="url(#filter0_f_144_120)">
                <path
                    d="M12 8C416 32 1117.6 138.4 692 372C266.4 605.6 970.667 1141.33 1376 1380C1696 1568.42 1993.6 2072.8 1744 2268C1414.4 2501.6 569.333 2365.33 188 2268C-213.333 2216 -786.4 2342.4 132 3264C1280 4416 2660 3816 2000 4868C1472 5709.6 154.667 5536 -324 5656"
                    stroke="url(#paint0_radial_144_120)"
                    strokeWidth="400"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_144_120"
                    x="-1560.8"
                    y="-1191.65"
                    width="4932.15"
                    height="8041.64"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="500" result="effect1_foregroundBlur_144_120" />
                </filter>
                <radialGradient
                    id="paint0_radial_144_120"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-16 8.00018) rotate(71.3749) scale(6099.43 2734.43)"
                >
                    <stop stopColor="#663675" />
                    <stop offset="0.333333" stopColor="#A7D5EA" />
                    <stop offset="0.666667" stopColor="#00B166" />
                    <stop offset="1" stopColor="#3363ED" />
                </radialGradient>
            </defs>
        </motion.svg>
    );
};

export default Light;

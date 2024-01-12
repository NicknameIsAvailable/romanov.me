"use client"

import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import React from 'react';

const GoBackButton = () => {
    const router = useRouter()
    const goBack = () => {
        router.back()
    }

    return (
        <button onClick={goBack} className="text-accent-3 p-2 rounded-full duration-150 active:bg-accent-3/30"><ArrowBack className="w-12 h-12"/></button>
    );
};

export default GoBackButton;
"use client"

import State from '@/widgets/state/ui';
import React, { useEffect, useState } from 'react';
import StatesListLoading from './loading';

const View = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [states, setStates] = useState<any>()

    const url = process.env.NEXT_PUBLIC_URL

    const fetchData = async () => {
        const response = await fetch(`${url}/api/blog`)
        const data = await response.json()
        setStates(data.data)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (isLoading)
        return <StatesListLoading/>
    else
    return (
        <div className="flex flex-col gap-6">
            {states?.map((state: any) => <State data={state}/>)}
        </div>
    );
};

export default View;
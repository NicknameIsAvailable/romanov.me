import Button from '@/widgets/button/ui';
import React from 'react';
import GitHub from "@/public/icons/github.svg"
import Telegram from "@/public/icons/telegram.svg"
import GradientBlob from "@/public/images/gradient-blob-1.svg"
import Image from 'next/image';
import { DictHello } from '@/app/[lang]/model';

const Hello = ({dict}: {dict: DictHello}) => {
    return (
        <section className='container mx-auto min-h-screen flex items-center'>
            <div className="relative z-[1]">
                <Image src={GradientBlob} alt="Gradient blob" className="absolute -top-12 -z-[1]"/>
                <h2 className='text-accent-3 text-5xl font-bold'>{dict.name}</h2>
                <h1 className='text-accent-1 text-9xl font-bold'>{dict.job}</h1>
                <div className="flex gap-12 mt-6">
                    <Button className="w-60">{dict.aboutMeButton}</Button>
                    <Button className="w-60" variant='secondary'>{dict.getInTouchButton}</Button>
                </div>
                <div className="flex gap-6 mt-6">
                    <Button className="rounded-full h-12 p-2"><Image src={GitHub} alt='GitHub'/></Button>
                    <Button className="rounded-full h-12 p-2"><Image src={Telegram} alt='GitHub'/></Button>
                </div>
            </div>
        </section>
    );
};

export default Hello;
import Button from '@/widgets/button/ui';
import React from 'react';
import GradientBlob from "@/public/images/gradient-blob-1.svg"
import Image from 'next/image';
import { DictHello } from '@/app/[lang]/model';
import { GitHub, Mail, Telegram } from '@mui/icons-material';
import Link from 'next/link';

const Hello = ({dict}: {dict: DictHello}) => {
    return (
        <section className='container p-4 mx-auto min-h-screen flex items-center'>
            <div id="hello" className="absolute top-0"/>
            <div className="relative z-[1] w-full flex flex-col justify-center items-center sm:items-start">
                <Image src={GradientBlob} alt="Gradient blob" className="absolute -top-12 -z-[1]"/>
                <h2 className='text-accent-3 text-3xl lg:text-5xl font-bold'>{dict.name}</h2>
                <h1 className='text-accent-1 xl:text-9xl font-bold lg:text-7xl text-5xl' dangerouslySetInnerHTML={{__html: dict.job}}/>
                <div className="flex flex-col sm:flex-row gap-12 mt-6">
                    <Link href="#about-me">
                        <Button className="sm:w-60 w-96">{dict.aboutMeButton}</Button>
                    </Link>
                    <Link href="#get-in-touch">
                        <Button className="sm:w-60 w-96" variant='secondary'>{dict.getInTouchButton}</Button>
                    </Link>
                </div>
                <div className="flex gap-6 mt-6">
                    <Link target='_blank' href="https://github.com/NicknameIsAvailable/">
                        <Button className="rounded-full h-12 p-2"><GitHub className="w-10 h-10/"/></Button>
                    </Link>
                    <Link target='_blank' href="https://t.me/NicknameIsAvailable">
                        <Button className="rounded-full h-12 p-2"><Telegram className="w-10 h-10"/></Button>
                    </Link>
                    <Link target='_blank' href="mailto:iamgenii@yandex.ru">
                        <Button className="rounded-full h-12 p-2"><Mail className="w-10 h-10"/></Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hello;
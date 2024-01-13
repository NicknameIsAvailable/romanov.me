"use client"

import { DictGetInTouch } from '@/app/[lang]/model';
import Button from '@/widgets/button/ui';
import { GitHub, Mail, Telegram } from '@mui/icons-material';
import Link from 'next/link';
import React, { useState } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import api from "@/app/api";

// interface Inputs {
//     name: string;
//     telegram: string;
//     content: string;
// }

const GetInTouch = ({dict}: {dict: DictGetInTouch}) => {
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm<Inputs>()
    
    // const [loading, setLoading] = useState<boolean>(false)
    
    // const onSubmit: SubmitHandler<Inputs> = (data) => {
    //     setLoading(true)
    //     api.post('/api/order', data).then(() => setLoading(false))
    // }

    return (
        <main className="mt-36 pb-12 bg-light p-4 container mx-auto">
            <div id="get-in-touch"/>
            <h1 className="text-center text-accent-3 text-5xl font-bold">{dict.title}</h1>
            {/* <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 w-full mx-auto border-2 border-accent-2 rounded-2xl p-6 mt-24">
                <label className="mt-6">
                    <h3 className="text-2xl text-white font-bold">{dict.label1.name}</h3>
                    <input className="mt-4 text-white border-2 border-accent-3 bg-light/10 py-2 px-6 w-full rounded-2xl" placeholder={dict.label1.placeholder}/>
                </label>
                <label className="mt-6">
                    <h3 className="text-2xl text-white font-bold">{dict.label2.name}</h3>
                    <input className="mt-4 text-white border-2 border-accent-3 bg-light/10 py-2 px-6 w-full rounded-2xl" placeholder={dict.label2.placeholder}/>
                </label>
                <label className="">
                    <h3 className="mt-6 text-2xl text-white font-bold">{dict.label3.name}</h3>
                    <textarea rows={5} className="mt-4 text-white border-2 border-accent-3 bg-light/10 py-2 px-6 w-full rounded-2xl" placeholder={dict.label3.placeholder}/>
                </label>
                <Button className="max-w-60 w-full mx-auto mt-6">{dict.sendButton}</Button>
            </form> */}

            <h3 className="text-center text-accent-3 text-2xl font-bold mt-14">{dict.writeDirectly}</h3>
            <div className="flex gap-6 mt-6 w-full justify-center">
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
        </main>
    );
};

export default GetInTouch;
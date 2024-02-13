"use client"

import { DictGetInTouch } from '@/app/[lang]/model';
import Alert from '@/widgets/alert/ui';
import Button from '@/widgets/button/ui';
import { GitHub, Mail, Telegram } from '@mui/icons-material';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PendingIcon from '@mui/icons-material/Pending';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Animation from "@/widgets/animation";

interface Inputs {
    name: string;
    telegram: string;
    content: string;
}

const sendData = async (inputs: Inputs) => {
    console.log(inputs)
    const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(inputs),
        mode: "no-cors"
    })
    const data = await res.json()
    return data
}

const GetInTouch = ({dict}: {dict: DictGetInTouch}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
    
    const [dataSent, setDataSent] = useState<boolean>(false)
    const [alertData, setAlertData] = useState<{
        text: string,
        icon: ReactNode,
        color: "success" | "warning" | "danger" | "info",
        open: boolean
    }>({
        text: "",
        icon: <></>,
        color: "info",
        open: false
    })
    const [loading, setLoading] = useState<boolean>(false)
    
    const onSubmit: SubmitHandler<Inputs> = async (inputs: Inputs) => {
        setLoading(true)
        setAlertData({
            text: dict.alertTexts[0],
            icon: <PendingIcon fontSize='large' className='text-info'/>,
            color: "info",
            open: true
        })
        const data = await sendData(inputs)
        if (data.success) {
            setLoading(false)
            setAlertData({
                text: dict.alertTexts[1],
                icon: <CheckCircleOutlineIcon fontSize='large' className='text-success'/>,
                color: "success",
                open: true
            })

            setTimeout(() => setAlertData({...alertData, open: false}), 700)
        } else {
            setLoading(false)
            setAlertData({
                text: dict.alertTexts[2],
                icon: <PriorityHighIcon fontSize='large' className='text-danger'/>,
                color: "danger",
                open: true
            })

            setTimeout(() => setAlertData({...alertData, open: false}), 700)
        }
    }

    const handleCloseAlert = () => {
        setAlertData({...alertData, open: false})
    }

    return (
        <main>
        <Alert 
            onClose={handleCloseAlert} 
            open={alertData.open} 
            icon={alertData.icon} 
            text={alertData.text} 
            color={alertData.color}
        />

            <div className="mt-36 pb-12 p-4 container mx-auto">
                <div id="get-in-touch"/>
                <Animation variant="text">
                    <h1 className="text-center text-accent-3 text-5xl font-bold">{dict.title}</h1>
                </Animation>
                <Animation variant="card">
                    <form onSubmit={handleSubmit(onSubmit)}
                          className="lg:w-1/2 w-full mx-auto border-2 border-accent-2 rounded-2xl p-6 mt-24">
                        <label className="mt-6">
                            <h3 className="text-2xl text-white font-bold">{dict.label1.name}</h3>
                            <input {...register("name")}
                                   className="mt-4 text-white border-2 border-accent-3 bg-light/10 py-2 px-6 w-full rounded-2xl"
                                   placeholder={dict.label1.placeholder}/>
                        </label>
                        <label className="mt-6">
                            <h3 className="text-2xl text-white font-bold">{dict.label2.name}</h3>
                            <input {...register("telegram")}
                                   className="mt-4 text-white border-2 border-accent-3 bg-light/10 py-2 px-6 w-full rounded-2xl"
                                   placeholder={dict.label2.placeholder}/>
                        </label>
                        <label className="">
                            <h3 className="mt-6 text-2xl text-white font-bold">{dict.label3.name}</h3>
                            <textarea {...register("content")} rows={5}
                                      className="mt-4 text-white border-2 border-accent-3 bg-light/10 py-2 px-6 w-full rounded-2xl"
                                      placeholder={dict.label3.placeholder}/>
                        </label>
                        <Button disabled={loading || dataSent} className="w-full mx-auto mt-6">
                            {loading ? dict.loading : dataSent ? dict.dataSent : dict.sendButton}
                        </Button>
                    </form>
                    </Animation>

                <Animation variant="text">
                    <h3 className="text-center text-accent-3 text-2xl font-bold mt-14">{dict.writeDirectly}</h3>
                </Animation>
                    <div className="flex gap-6 mt-6 w-full justify-center">
                        <Animation variant="card" duration={0.7}>
                            <Link target='_blank' href="https://github.com/NicknameIsAvailable/">
                                <Button className="rounded-full h-12 p-2"><GitHub className="w-10 h-10/"/></Button>
                            </Link>
                        </Animation>
                        <Animation variant="card" duration={1}>
                            <Link target='_blank' href="https://t.me/NicknameIsAvailable">
                                <Button className="rounded-full h-12 p-2"><Telegram className="w-10 h-10"/></Button>
                            </Link>
                        </Animation>
                        <Animation variant="card" duration={1.3}>
                            <Link target='_blank' href="mailto:iamgenii@yandex.ru">
                                <Button className="rounded-full h-12 p-2"><Mail className="w-10 h-10"/></Button>
                            </Link>
                        </Animation>
                    </div>
                </div>
        </main>
    );
};

export default GetInTouch;
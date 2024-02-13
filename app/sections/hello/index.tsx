import Button from '@/widgets/button/ui';
import React from 'react';
import GradientBlob from "@/public/images/gradient-blob-1.svg"
import Image from 'next/image';
import { DictHello } from '@/app/[lang]/model';
import { GitHub, Mail, Telegram } from '@mui/icons-material';
import Link from 'next/link';
import Marquee from "react-fast-marquee";
import skills from "@/shared/skills.json";
import _ from "lodash";
import Animation from "@/widgets/animation";

const Hello = ({dict}: {dict: DictHello}) => {
    const shuffledSkills = _.shuffle(skills)

    return (
        <section className='container p-4 mx-auto min-h-screen flex items-center'>
            <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center flex-col uppercase">
                <Marquee loop={0} autoFill={true} style={{overflow: "hidden"}}>
                    {shuffledSkills.slice(0, 10).map((skill: string, key: number) =>
                            <h1
                                className="text-accent-3/10 leading-none text-opacity-10 text-[256px] font-bold font-['JetBrains Mono'] mr-10"
                                key={key}
                            >
                                {skill}
                            </h1>
                        )}
                    </Marquee>
                    <Marquee loop={0} direction="right" autoFill={true} style={{overflow: "hidden"}}>
                        {shuffledSkills.slice(11, skills.length).map((skill: string, key: number) =>
                            <h1
                                className="text-accent-3/10 leading-none text-opacity-10 text-[256px] font-bold font-['JetBrains Mono'] mr-10"
                                key={key}
                            >
                                {skill}
                            </h1>
                        )}
                    </Marquee>
                    <Marquee loop={0} style={{overflow: "hidden"}}>
                        {shuffledSkills.slice(11, skills.length).map((skill: string, key: number) =>
                            <h1
                                className="text-accent-3/10 leading-none text-opacity-10 text-[256px] font-bold font-['JetBrains Mono'] mr-10"
                                key={key}
                            >
                                {skill}
                            </h1>
                        )}
                    </Marquee>
            </div>
            <div id="hello" className="absolute top-0"/>
            <div className="relative z-[1] w-full flex flex-col justify-center items-center sm:items-start">
                <Image src={GradientBlob} alt="Gradient blob" className="absolute -top-12 -z-[1]"/>
                <Animation duration={0.3} variant="text">
                    <h2 className='text-accent-3 text-3xl lg:text-5xl font-bold'>{dict.name}</h2>
                </Animation>
                <Animation duration={0.7} variant="text">
                    <h1 className='text-accent-1 xl:text-9xl font-bold lg:text-7xl text-5xl'
                        dangerouslySetInnerHTML={{__html: dict.job}}/>
                </Animation>
                <Animation duration={1} variant="text">
                    <div className="flex flex-col sm:flex-row gap-12 mt-6">
                        <Link href="#about-me">
                            <Button className="sm:w-60 w-96">{dict.aboutMeButton}</Button>
                        </Link>
                        <Link href="#get-in-touch">
                            <Button className="sm:w-60 w-96" variant='secondary'>{dict.getInTouchButton}</Button>
                        </Link>
                    </div>
                </Animation>
                {/*<div className="flex gap-4 justify-center">*/}
                {/*    <Link href="/blog">*/}
                {/*        <Button className="sm:w-full mt-5" variant='cool'>{dict.blog}</Button>*/}
                {/*    </Link>*/}
                {/*    <h3 className="text-xl my-auto text-accent-3">{dict.myBlog}</h3>*/}
                {/*</div>*/}
                <div className="flex gap-6 mt-6">
                    <Animation duration={1.3} variant="appear">
                        <Link target='_blank' href="https://github.com/NicknameIsAvailable/">
                            <Button className="rounded-full h-12 p-2"><GitHub className="w-10 h-10/"/></Button>
                        </Link>
                    </Animation>
                    <Animation duration={1.6} variant="appear">
                        <Link target='_blank' href="https://t.me/NicknameIsAvailable">
                            <Button className="rounded-full h-12 p-2"><Telegram className="w-10 h-10"/></Button>
                        </Link>
                    </Animation>
                    <Animation duration={1.9} variant="appear">
                        <Link target='_blank' href="mailto:iamgenii@yandex.ru">
                            <Button className="rounded-full h-12 p-2"><Mail className="w-10 h-10"/></Button>
                        </Link>
                    </Animation>
                </div>
            </div>
        </section>
    );
};

export default Hello;
import React from 'react';
import GradientBlob2 from "@/public/images/gradient-blob-2.svg"
import Image from 'next/image';
import { DictAboutMe } from '@/app/[lang]/model';
import Animation from "@/widgets/animation";

const AboutMe = ({dict}: {dict: DictAboutMe}) => {
    return (
        <section className="container relative p-4 mx-auto min-h-screen flex gap-12">
            <div id="about-me"/>
            <Animation variant="text">
                <div className="flex-3 w-full sm:w-3/5 relative z-0">
                    <Image src={GradientBlob2} alt="Gradient Blob" className="absolute z-[-1] -top-16"/>
                    <h1 className="text-accent-3 font-bold text-5xl">{dict.title}</h1>
                    <p className="text-white mt-8 text-2xl font-bold" dangerouslySetInnerHTML={{__html: dict.text}}/>
                    <div className="h-[2px] mt-6 w-full bg-accent-3 mx-6"/>
                </div>
            </Animation>
        </section>
    );
};

export default AboutMe;
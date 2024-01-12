import { DictPortfolio } from '@/app/[lang]/model';
import Button from '@/widgets/button/ui';
import React from 'react';
import projects from "@/shared/projects.json"
import ProjectCard from '@/widgets/project-card/ui';
import Link from 'next/link';
import Image from 'next/image';
import GradientBlob4 from "@/public/images/gradient-blob-4.svg";

const Portfolio = ({dict, lang}: {dict: DictPortfolio, lang: "ru-RU" | "en-US"}) => {
    return (
        <section className="mt-36 container p-4 mx-auto relative z-1">
            <div id="portfolio"/>
            <Image src={GradientBlob4} alt="Gradient blob 4" className="absolute z-0 top-0"/>
            <h1 className="text-accent-3 text-5xl font-bold text-center">{dict.title}</h1>
            <div className="flex flex-col gap-6 mt-24">
                {projects.data.slice(0,3).map((project: any, key: number) => 
                    <ProjectCard dict={dict} key={key} data={project} lang={lang}/>
                )}
            </div>
            <div className="flex justify-center mt-6">
                <Link href={`/portfolio`}>
                    <Button className="mx-auto" variant="secondary">{dict.viewMoreButton}</Button>
                </Link>
            </div>
        </section>
    );
};

export default Portfolio;
import { DictPortfolio } from '@/app/[lang]/model';
import Button from '@/widgets/button/ui';
import React from 'react';
import ProjectCard from '@/widgets/project-card/ui';
import Link from 'next/link';
import projects from "@/shared/projects.json"
import Animation from "@/widgets/animation";

const Portfolio = async ({dict, lang}: {dict: DictPortfolio, lang: "ru-RU" | "en-US"}) => {

    // const url = process.env.NEXT_PUBLIC_URL

    // const fetchData = async () => {
    //   const response = await fetch(`${url}/api/portfolio?count=5`)
    //   const data = response.json()
    //   return data
    // }

    // const projects = await fetchData()

    return (
        <section className="mt-36 container p-4 mx-auto relative z-1">
            <div id="portfolio"/>
            <Animation variant="text">
                <h1 className="text-accent-3 text-5xl font-bold text-center">{dict.title}</h1>
            </Animation>
            <div className="flex flex-col gap-6 mt-24">
                {projects.data.slice(0,3).map((project: any, key: number) => 
                    <ProjectCard dict={dict} key={key} data={project} lang={lang}/>
                )}
            </div>
            <Animation variant="card">
                <div className="flex justify-center mt-6">
                    <Link href={`/portfolio`}>
                        <Button className="mx-auto" variant="secondary">{dict.viewMoreButton}</Button>
                    </Link>
                </div>
            </Animation>
        </section>
    );
};

export default Portfolio;
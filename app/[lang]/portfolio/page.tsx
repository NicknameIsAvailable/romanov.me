import React from 'react';
import { Dict } from '../model';
import { dictionaries } from '../dictionaries';
import ProjectCard from '@/widgets/project-card/ui';
import GoBackButton from '@/widgets/go-back-button';
import projects from "@/shared/projects.json"

const Page = async ({params}: {params: {
    lang: "ru-RU" | "en-US"
}}) => {
    const dict: Dict = dictionaries[params.lang]

    // const url = process.env.NEXT_PUBLIC_URL

    // const fetchData = async () => {
    //     const response = await fetch(`${url}/api/portfolio`)
    //     const data = response.json()
    //     return data
    //   }
  
    // const projects = await fetchData()

    return (
        <main className="min-h-screen min-w-screen dark:bg-light bg-white">
            <div className="container p-4 mx-auto">
                <div className="w-full flex justify-between items-center">
                    <GoBackButton/>
                    <h1 className="text-accent-3 text-5xl font-bold">{dict.portfolio.title}</h1>
                </div>
                <div className="flex flex-col gap-6 mt-24">
                {projects.data.map((project: any, key: number) => 
                    <ProjectCard dict={dict.portfolio} key={key} data={project} lang={params.lang}/>
                )}
            </div>
            </div>
        </main>
    );
};

export default Page;
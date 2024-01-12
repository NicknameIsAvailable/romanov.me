import React from 'react';
import { Dict } from '../model';
import { dictionaries } from '../dictionaries';
import projects from "@/shared/projects.json"
import ProjectCard from '@/widgets/project-card/ui';
import { ArrowBack } from '@mui/icons-material';
import { useRouter } from 'next/router';
import GoBackButton from '@/widgets/go-back-button';

const Page = ({params}: {params: {
    lang: "ru-RU" | "en-US"
}}) => {
    const dict: Dict = dictionaries[params.lang]

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
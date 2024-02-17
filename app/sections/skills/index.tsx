import React from 'react';
import { Props, Skill, SkillsDiv } from './model';
import JSIcon from "@/public/images/js.svg"
import TSIcon from "@/public/images/ts.svg"
import PythonIcon from "@/public/images/python.svg"
import GoIcon from "@/public/images/go.svg"
import NextIcon from "@/public/images/next.svg"
import ReactIcon from "@/public/images/react.svg"
import ReduxIcon from "@/public/images/redux.svg"
import ExpressIcon from "@/public/images/express.svg"
import FastAPIIcon from "@/public/images/fastapi.svg"
import PostgresIcon from "@/public/images/postgres.svg"
import MongoIcon from "@/public/images/mongodb.svg"
import MySQLIcon from "@/public/images/mysql.svg"
import Zustand from "@/public/images/zustand.png"
import SupabaseIcon from "@/public/images/supabase.svg"
import SkillCard from "@/widgets/skill-card/ui"
import Image from 'next/image';
import GradientBlob3 from "@/public/images/gradient-blob-3.svg"
import Animation from "@/widgets/animation";


const Skills = ({dict}: Props) => {
    const skills: SkillsDiv[] = [
        {
            name: dict.skillDivs[0].name,
            skills: [
                {
                    name: dict.skillDivs[0].skills[0].name,
                    description: dict.skillDivs[0].skills[0].description,
                    icon: JSIcon,
                    url: "https://www.javascript.com/"
                },
                {
                    name: dict.skillDivs[0].skills[1].name,
                    description: dict.skillDivs[0].skills[1].description,
                    icon: TSIcon,
                    url: "https://www.typescriptlang.org/",
                },
                {
                    name: dict.skillDivs[0].skills[2].name,
                    description: dict.skillDivs[0].skills[2].description,
                    icon: PythonIcon,
                    url: "https://www.python.org/"
                },
                {
                    name: dict.skillDivs[0].skills[3].name,
                    description: dict.skillDivs[0].skills[3].description,
                    icon: GoIcon,
                    url: "https://go.dev/"
                }, 
            ]
        },
        {
            name: dict.skillDivs[1].name,
            skills: [
                {
                    name: dict.skillDivs[1].skills[0].name,
                    description: dict.skillDivs[1].skills[0].description,
                    icon: NextIcon,
                    url: "https://nextjs.org/"
                },
                {
                    name: dict.skillDivs[1].skills[1].name,
                    description: dict.skillDivs[1].skills[1].description,
                    icon: ReactIcon,
                    url: "https://react.dev/"
                },
                {
                    name: dict.skillDivs[1].skills[2].name,
                    description: dict.skillDivs[1].skills[2].description,
                    icon: ReduxIcon,
                    url: "https://redux.js.org/"
                },
                {
                    name: dict.skillDivs[1].skills[3].name,
                    description: dict.skillDivs[1].skills[3].description,
                    icon: Zustand,
                    url: "https://docs.pmnd.rs/zustand/getting-started/introduction"
                },
                {
                    name: dict.skillDivs[1].skills[4].name,
                    description: dict.skillDivs[1].skills[4].description,
                    icon: ReduxIcon,
                    url: "https://redux.js.org/"
                },
                {
                    name: dict.skillDivs[1].skills[5].name,
                    description: dict.skillDivs[1].skills[5].description,
                    icon: ReduxIcon,
                    url: "https://redux.js.org/"
                },
                {
                    name: dict.skillDivs[1].skills[6].name,
                    description: dict.skillDivs[1].skills[6].description,
                    icon: ReduxIcon,
                    url: "https://redux.js.org/"
                },
            ]
        },
        {
            name: dict.skillDivs[2].name,
            skills: [
                {
                    name: dict.skillDivs[2].skills[0].name,
                    description: dict.skillDivs[2].skills[0].description,
                    icon: ExpressIcon,
                    url: "https://expressjs.com/"
                },
                {
                    name: dict.skillDivs[2].skills[1].name,
                    description: dict.skillDivs[2].skills[1].description,
                    icon: FastAPIIcon,
                    url: "https://fastapi.tiangolo.com/"
                },
            ]
        },
        {
            name: dict.skillDivs[3].name,
            skills: [
                {
                    name: dict.skillDivs[3].skills[0].name,
                    description: dict.skillDivs[3].skills[0].description,
                    icon: PostgresIcon,
                    url: "https://www.postgresql.org/"
                },
                {
                    name: dict.skillDivs[3].skills[1].name,
                    description: dict.skillDivs[3].skills[1].description,
                    icon: MongoIcon,
                    url: "https://www.mongodb.com/"
                },
                {
                    name: dict.skillDivs[3].skills[2].name,
                    description: dict.skillDivs[3].skills[2].description,
                    icon: MySQLIcon,
                    url: "https://www.mysql.com/"
                },
                {
                    name: dict.skillDivs[3].skills[3].name,
                    description: dict.skillDivs[3].skills[3].description,
                    icon: SupabaseIcon,
                    url: "https://supabase.com/"
                }, 
            ]
        },
    ] 

    return (
        <section className="container p-4 mx-auto min-h-screen">
            <div id="skills"/>
            <Animation duration={0.5} variant="text">
                <h1 className="text-primary dark:text-accent-3 font-bold text-5xl">{dict.title}</h1>
            </Animation>
            <div className="flex flex-col flex-wrap gap-6 mt-3 relative z-0">
            <Image src={GradientBlob3} alt="Gradient blob" className="absolute right-0 top-1/4 z-[-1]"/>
                {
                    skills.map((skillDiv: SkillsDiv, key: number) => 
                        <div className="mt-6" key={key}>
                            <Animation duration={0.7} variant="text">
                                <h2 className="text-accent-2 text-3xl font-bold">{skillDiv.name}</h2>
                            </Animation>
                            <div className="flex gap-12 mt-6 justify-between sm:justify-start relative flex-wrap">
                                {skillDiv.skills.map((skill: Skill, key: number) =>
                                    <SkillCard skill={skill} key={key}/>
                                )}
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Skills;
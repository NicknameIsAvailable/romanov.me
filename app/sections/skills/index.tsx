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
import SupabaseIcon from "@/public/images/supabase.svg"
import Light from "@/public/icons/light.svg"
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
                    icon: JSIcon
                },
                {
                    name: dict.skillDivs[0].skills[1].name,
                    description: dict.skillDivs[0].skills[1].description,
                    icon: TSIcon
                },
                {
                    name: dict.skillDivs[0].skills[2].name,
                    description: dict.skillDivs[0].skills[2].description,
                    icon: PythonIcon
                },
                {
                    name: dict.skillDivs[0].skills[3].name,
                    description: dict.skillDivs[0].skills[3].description,
                    icon: GoIcon
                }, 
            ]
        },
        {
            name: dict.skillDivs[1].name,
            skills: [
                {
                    name: dict.skillDivs[1].skills[0].name,
                    description: dict.skillDivs[1].skills[0].description,
                    icon: NextIcon
                },
                {
                    name: dict.skillDivs[1].skills[1].name,
                    description: dict.skillDivs[1].skills[1].description,
                    icon: ReactIcon
                },
                {
                    name: dict.skillDivs[1].skills[2].name,
                    description: dict.skillDivs[1].skills[2].description,
                    icon: ReduxIcon
                },
            ]
        },
        {
            name: dict.skillDivs[2].name,
            skills: [
                {
                    name: dict.skillDivs[2].skills[0].name,
                    description: dict.skillDivs[2].skills[0].description,
                    icon: ExpressIcon
                },
                {
                    name: dict.skillDivs[2].skills[1].name,
                    description: dict.skillDivs[2].skills[1].description,
                    icon: FastAPIIcon
                },
            ]
        },
        {
            name: dict.skillDivs[3].name,
            skills: [
                {
                    name: dict.skillDivs[3].skills[0].name,
                    description: dict.skillDivs[3].skills[0].description,
                    icon: PostgresIcon
                },
                {
                    name: dict.skillDivs[3].skills[1].name,
                    description: dict.skillDivs[3].skills[1].description,
                    icon: MongoIcon
                },
                {
                    name: dict.skillDivs[3].skills[2].name,
                    description: dict.skillDivs[3].skills[2].description,
                    icon: MySQLIcon
                },
                {
                    name: dict.skillDivs[3].skills[3].name,
                    description: dict.skillDivs[3].skills[3].description,
                    icon: SupabaseIcon
                }, 
            ]
        },
    ] 

    return (
        <section className="container p-4 mx-auto min-h-screen">
            <div id="skills"/>
            <Animation duration={0.5} variant="text">
                <h1 className="text-accent-3 font-bold text-5xl">{dict.title}</h1>
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
                                    <Animation key={key} variant="card" duration={0.7 + (0.3 * key)}>
                                        <div
                                             className="py-6 pl-6 bg-light/30 backdrop-blur-xl relative z-0 cursor-pointer w-[45%] sm:w-64 rounded-2xl border-2 border-accent-3 flex items-center gap-2">
                                            <Image src={Light} alt="Light"
                                                   className="absolute left-0 h-full w-full rounded-2xl z-[-1]"/>
                                            <Image src={skill.icon} alt={skill.name}/>
                                            <h3 className="w-full text-accent-3 text-center text-xl font-bold">{skill.name}</h3>
                                        </div>
                                    </Animation>
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
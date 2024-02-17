import React from 'react';
import Image from "next/image";
import Light from "@/public/icons/light.svg";
import Animation from "@/widgets/animation";
import {Props} from "../model"
import Link from "next/link";

const SkillCard: React.FC<Props> = ({skill, key}) => {
    return (
        <Animation key={key} variant="card" duration={0.7 + (0.3 * key)}>
            <Link href={skill.url} target="_blank">
                <div
                    className="p-6 bg-light/30 backdrop-blur-xl relative z-0 cursor-pointer min-w-80 w-full h-32 sm:min-w-64 rounded-2xl border-2 border-primary dark:border-accent-3 flex items-center gap-2"
                >
                    <Image src={Light} alt="Light"
                           height={96}
                           width={96}
                           className="absolute left-0 h-full w-full rounded-2xl z-[-1]"/>
                    <Image src={skill.icon} alt={skill.name}/>
                    <h3 className={`w-full text-primary dark:text-accent-3 text-center text-xl font-bold`}>{skill.name}</h3>
                </div>
            </Link>
        </Animation>
    );
};

export default SkillCard;
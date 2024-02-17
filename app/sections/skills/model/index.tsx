import { DictSkills } from "@/app/[lang]/model"
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Props {
    dict: DictSkills;
}

export interface SkillsDiv {
    name: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    description: string;
    icon: string | StaticImport;
    url: string
}
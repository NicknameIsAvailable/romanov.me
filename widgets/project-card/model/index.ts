import { DictPortfolio } from "@/app/[lang]/model";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Props {
    data: {
        title: {
            "ru-RU": string;
            "en-US": string;
        };
        description: {
            "ru-RU": string;
            "en-US": string;
        };
        from: Date;
        to: Date;
        tags: string[];
        url: string;
        github?: string;
        image: string | StaticImport;
    };
    lang: "ru-RU" | "en-US";
    dict: DictPortfolio;
    key: number;
}

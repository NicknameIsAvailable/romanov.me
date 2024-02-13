import React from 'react';
import { Props } from '../model';
import Image from 'next/image';
import Button from '@/widgets/button/ui';
import GitHub from '@mui/icons-material/GitHub';
import Link from 'next/link';
import Animation from "@/widgets/animation";

const ProjectCard = ({data, lang, dict, key}: Props) => {
    const formattedData = {
        from: new Date(data.from),
        to: new Date(data.to),
      };

    const animationDuration = 0.7 + (0.3 * key)

    return (
        <Animation variant="card" duration={animationDuration}>
            <div className="border-2 p-6 rounded-3xl border-accent-2 bg-light/30 backdrop-blur-md">
                <div className="flex gap-6 flex-wrap">
                    <Image
                        className="max-w-full sm:min-w-96 bg-light flex-1 min-h-44 rounded-3xl sm:max-w-[504px] max-h-[288px] w-full h-full"
                        width={0}
                        height={0}
                        src={data.image}
                        alt={data.title[lang]}
                    />
                    <div className="flex-1">
                        <h2 className="text-accent-3 text-3xl font-bold">{data.title[lang]}</h2>
                        <p className="text-white text-2xl font-bold mt-6">
                            {data.description[lang]}
                        </p>
                    </div>
                </div>
                <div className="flex mt-6 gap-6 flex-wrap">
                    <div className="min-w-full sm:min-w-96 flex-1 max-w-[504px] w-full">
                        <div className="flex gap-6 w-full">
                            <Link href={data.url} target="_blank" className="flex-1">
                                <Button className="w-full">{dict.viewButton}</Button>
                            </Link>
                            {
                                data.github && data.github?.length > 0 ?
                                    <Link className="flex-1" href={data.github} target="_blank">
                                        <Button className="w-full"><GitHub className="w-8 h-8"/></Button>
                                    </Link>
                                    : ""
                            }
                        </div>
                        <h3 className="text-white text-2xl font-bold mt-6">{dict.from}{formattedData.from.toLocaleDateString()} {dict.to}{formattedData.to.toLocaleDateString()}</h3>
                    </div>
                    <div className="flex flex-2 sm:w-1/2 justify-start flex-wrap gap-6">
                        {data.tags.map((tag: string, key: number) =>
                            <div
                                className="py-2 px-6 h-12 bg-accent-1 text-center text-white rounded-full text-2xl font-bold"
                                key={key}>{tag.length > 14 ? `${tag.slice(0, 14)}...` : tag}</div>
                        )}
                    </div>
                </div>
            </div>
        </Animation>
    );
};

export default ProjectCard;
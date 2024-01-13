import React from 'react';
import { Props } from '../model';
import Image from 'next/image';
import Button from '@/widgets/button/ui';
import GitHub from '@mui/icons-material/GitHub';

const ProjectCard = ({data, lang, dict}: Props) => {
    const formattedData = {
        from: new Date(data.from),
        to: new Date(data.to),
      };      

    return (
        <div className="border-2 p-6 rounded-3xl border-accent-2 bg-light/30 backdrop-blur-md">
            <div className="flex gap-6 flex-wrap">
                <Image 
                    className="min-w-96 flex-1 min-h-44 rounded-3xl max-w-[504px] max-h-[288px] w-full h-full" 
                    width={384} 
                    height={176} 
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
                <div className="min-w-96 flex-1 max-w-[504px] w-full">
                    <div className="flex gap-6">
                        <Button className="w-full">{dict.viewButton}</Button>
                        {
                            data.github && data.github?.length > 0 ?
                            <Button><GitHub className="w-8 h-8"/></Button>
                            : ""
                        }
                    </div>
                    <h3 className="text-white text-2xl font-bold mt-6">{dict.from}{formattedData.from.toLocaleDateString()} {dict.to}{formattedData.to.toLocaleDateString()}</h3>
                </div>
                <div className="flex flex-2 sm:w-1/2 justify-start flex-wrap gap-6">
                    {data.tags.map((tag: string, key: number) => 
                        <div className="py-2 px-6 h-12 bg-accent-1 text-center text-white rounded-full text-2xl font-bold" key={key}>{tag}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
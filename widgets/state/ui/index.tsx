import React from 'react';
import { Props } from '../model';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import Image from 'next/image';
import Link from 'next/link';

const State = ({data}: Props) => {
    return (
        <div className="flex flex-col border-2 p-5 border-accent-3 rounded-2xl">
            {/* <Image width={390} height={390} src={data.image} alt={data.title}/> */}
            <Link href={`/blog/${data.id}`}>
                <h1 className="text-accent-3 text-4xl">{data.title}</h1>
            </Link>
            <p className="text-white text-xl mt-2">{data.description}</p>
            <div className="flex gap-4 mt-4">
                <button className={`flex cursor-pointer gap-4 justify-center items-center border-accent-3 border-2 px-6 py-2 rounded-2xl ${data.liked ? "bg-accent-3" : ""}`}>
                    <FavoriteBorderIcon className={data.liked ? "text-light" : "text-accent-3"}/> 
                    <h3 className={`text-xl text-accent-3 ${data.liked ? "text-light" : ""}`}>{data.likes || 0}</h3>
                </button>
                <button className="flex gap-4 justify-center items-center border-accent-3 border-2 px-6 py-2 rounded-2xl">
                    <CommentIcon className="text-accent-3"/>
                    <h3 className="text-xl text-accent-3">{data.comments || 0}</h3>
                </button>
            </div>
        </div>
    );
};

export default State;
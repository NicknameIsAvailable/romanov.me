import { Telegram } from '@mui/icons-material';
import Link from 'next/link';
import React from 'react';

const BlogFooter = () => {
    return (
        <footer className="mt-10 p-10 border-t-2 border-t-accent-2/30">
            <div className="container mx-auto">
                
                <Link target='_blank' href="https://t.me/FountainheadOneOfAKind">
                    <button className="text-accent-3 p-1 rounded-full active:bg-accent-3/30 hover:brightness-125 duration-300 -active:translate-x-1">
                        <Telegram/>
                    </button>
                </Link>
            </div>
        </footer>
    );
};

export default BlogFooter;
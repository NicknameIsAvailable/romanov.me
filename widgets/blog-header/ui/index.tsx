import Title from '@/widgets/title';
import Link from 'next/link';
import React from 'react';

const BlogHeader = () => {
    return (
        <header className="fixed w-full">
            <div className="container mx-auto z-10">
                <Link href="/blog">
                    <Title className="text-5xl font-bold uppercase">Супрематическая дурка</Title>
                </Link>
            </div>
            
        </header>
    );
};

export default BlogHeader;
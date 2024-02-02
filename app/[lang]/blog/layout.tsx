import BlogFooter from '@/widgets/blog-footer/ui';
import BlogHeader from '@/widgets/blog-header/ui';
import React, { ReactNode } from 'react';

const layout = ({children}: {children: ReactNode}) => {
    return (
        <>
            <head>
                <title>СУПРЕМАТИЧЕСКАЯ ДУРКА</title>
                <meta name="description" content="Блог супрематической дурки"/>
            </head>
            <main className=" w-screen bg-light z-0">
                <BlogHeader/>
                <div className="container min-h-screen mx-auto pt-32">
                    {children}
                </div>
                <BlogFooter/>
            </main>
        </>
    );
};

export default layout;
import React, { Suspense } from 'react';
import StatesList from '@/widgets/states-list/ui';
import Loading from './loading';

const Blog = () => {
    return (
        <>
        <Suspense fallback={<Loading/>}>
            <StatesList/>
        </Suspense>
        </>
    );
};

export default Blog;
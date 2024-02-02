import StatesList from '@/widgets/states-list/ui';
import React from 'react';

const Loading = () => {
    return (
        <>
          <StatesList loading={true}/>
        </>
    );
};

export default Loading;
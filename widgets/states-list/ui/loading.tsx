import Loading from '@/widgets/state/ui/loading';
import React from 'react';

const StatesListLoading = () => {
    const array = new Array(10).fill("")

    return (
        <div className="flex flex-col gap-6">
            {array.map(() => <Loading/>)}
        </div>
    );
};

export default StatesListLoading;
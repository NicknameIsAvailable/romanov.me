import React from 'react';
import StatesListLoading from './loading';
import View from './view';

const StatesList = ({loading}: {loading?: boolean}) => {
    if (loading)
        return <StatesListLoading/>
    else
        return <View/>
};

export default StatesList;
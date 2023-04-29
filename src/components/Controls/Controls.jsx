import React from 'react';
import { useDispatch } from 'react-redux';
import { initDataAction } from '../../reducers/rootReducer.js';

const Controls = () => {
    const dispatch = useDispatch();
    const onRegenerateClicked = () => {
        dispatch(initDataAction(true));
    };
    return (
        <>
            <button onClick={onRegenerateClicked}>Regenerate data</button>
        </>
    );
};

export default Controls;

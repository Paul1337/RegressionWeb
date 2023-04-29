import { createAction, createReducer } from '@reduxjs/toolkit';
import { initData } from './initData.js';
import { calculateLinearRegression } from './regression.js';
import updateData from './updateData.js';

const initialState = {
    data: null,
    regression: null,
};

export const initDataAction = createAction('initData');
export const updateDataAction = createAction('updateData');

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(initDataAction, (state, action) => {
            state.data = initData(action.payload || false);
            state.regression = calculateLinearRegression(state.data);
        })
        .addCase(updateDataAction, (state, action) => {
            state.data = updateData(state.data, action.payload);
        });
});

export default rootReducer;

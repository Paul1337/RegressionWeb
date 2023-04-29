import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { initDataAction } from '../reducers/rootReducer.js';

const store = configureStore({
    reducer: rootReducer,
});

store.dispatch(initDataAction());

export default store;

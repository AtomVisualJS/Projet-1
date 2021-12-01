import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './slice/postSlice';
import infosReducer from './slice/infosSlice';


export const store = configureStore({
    reducer: {
        posts: postsReducer, 
        infos: infosReducer,
    }
});


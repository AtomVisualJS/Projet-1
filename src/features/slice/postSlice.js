
import { createSlice } from "@reduxjs/toolkit";
import { GetAllPosts } from "../../api/GET/postsGet";


const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [GetAllPosts.pending]: (state, action) => {
            state.status = "loading";
        },
        [GetAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.status = "succeeded";
        },
        [GetAllPosts.rejected]: (state, action) => {
            state.error = action.error;
            state.status = "failed";
        },
    },
});

export default postSlice.reducer;
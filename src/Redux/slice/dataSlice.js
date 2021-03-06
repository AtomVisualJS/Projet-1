import { createSlice } from "@reduxjs/toolkit";
import {DatagetAll} from "../asyncThunk/DatagetAll";

// dataSlice.js
const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: [],
        status: "idle",
        error: null,
    },
    extraReducers: {
        [DatagetAll.pending]: (state, action) => {
            state.status = "pending";
        },
        [DatagetAll.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        [DatagetAll.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    }
});


export default dataSlice.reducer;

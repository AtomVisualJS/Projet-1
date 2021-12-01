
import { createSlice } from "@reduxjs/toolkit";
import { GetAllInfos } from "../../api/GET/getInfos";

const infosSlice = createSlice({
    name: "infos",
    initialState: {
        infos: [],
        loading: false,
        error: null,
    },
    extraReducers: {
        [GetAllInfos.pending]: (state, action) => {
            state.status = "loading";
        },
        [GetAllInfos.fulfilled]: (state, action) => {
            state.status = "succeeded";
            state.infos = action.payload;
        },
        [GetAllInfos.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        },
    },
});

export default infosSlice.reducer;

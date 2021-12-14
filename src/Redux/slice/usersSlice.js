
/// Create the slice user reducer

import { createSlice } from '@reduxjs/toolkit';
import  {getAllUsers}  from '../asyncThunk/usersThunk';

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending';
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.status = 'resolved';
        },
        [getAllUsers.rejected]: (state, action) => {
            state.error = action.error;
            state.status = 'rejected';
        },
    },
});

export default usersSlice.reducer;




/// AsyncThunk GetAllUsers

import { createAsyncThunk } from "@reduxjs/toolkit";
import {baseUrl} from "../baseUrl"


export const getAllUsers = createAsyncThunk (
    "clients/getAll",
    async () => {
        const response = await baseUrl.get("/clients");
        return response.data;
    }
);

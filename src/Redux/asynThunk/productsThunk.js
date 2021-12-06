import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseUrl";


export const GetAllProducts = createAsyncThunk (
    'products/getAllProducts',
    async () => {
        const response = await baseUrl('/products');
        return response.data;
    }
);

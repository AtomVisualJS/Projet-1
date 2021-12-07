
import { createAsyncThunk } from '@reduxjs/toolkit';
import {baseUrl} from "../baseUrl"

export const DatagetAll = createAsyncThunk( 
    'data/getAll',
    async ( ) => {
        const response = await baseUrl.get('/data')
        return response.data
    }
   
)

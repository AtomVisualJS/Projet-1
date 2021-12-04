import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const fetchProducts = createAsyncThunk( // action creator
    "products/fetchProducts", // action type
    async () => {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        console.log(data);
    }
);



const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
   extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload;
            state.loading = false;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.error = action.error;
            state.loading = false;
        },

    },
});


export default productsSlice.reducer;
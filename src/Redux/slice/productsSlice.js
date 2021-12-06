import { createSlice } from "@reduxjs/toolkit";
import { GetAllProducts } from "../asynThunk/productsThunk";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
  },
  extraReducers: {
    [GetAllProducts.fulfilled]: (state, action) => {
      state.status = "fulfilled";
      state.products = action.payload;
    },
    [GetAllProducts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;

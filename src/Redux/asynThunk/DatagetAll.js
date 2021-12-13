import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const DatagetAll = createAsyncThunk("data/getAll", async () => {
  const response = await axios.get("http://0.0.0:5500/api/data");
  return response.data;
});

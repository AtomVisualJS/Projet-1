import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../url";

export const GetAllInfos = createAsyncThunk("infos/getAll", async () => {
  const response = await api.get("/infos");
  return response.data;
});


import api from "../url"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const GetAllPosts = createAsyncThunk("posts/getAll", async () => {
    const response = await api.get("/posts")
    return response.data
})





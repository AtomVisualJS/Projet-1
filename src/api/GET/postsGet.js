
import api from "../url"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const GetAllPosts = createAsyncThunk("posts/getAll", async () => {
    const response = await api.get("/posts")
    return response.data
})

export const GetPostById = createAsyncThunk("posts/getById", async (id) => {
    const response = await api.get(`/posts/${id}`)
    return response.data
})




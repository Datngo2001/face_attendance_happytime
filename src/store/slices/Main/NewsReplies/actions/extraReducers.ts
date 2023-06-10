import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { NewsRepliesSearchParams } from "../newsRepliesSlice";

export const extraReducersSearchNewsReplies = createAsyncThunk(
    "searchNewsReplies",
    async (params: NewsRepliesSearchParams) => {
        return api
            .post(`/api/news/reply/search?page=${params.page}&size=${params.size}`, params)
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);
    }
);

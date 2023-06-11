import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { NewsRepliesType } from "../newsRepliesSlice";

export const extraReducersGetNewsLikes = createAsyncThunk(
    "getNewsLikes",
    async ({ params, onSuccess }: any) => {
        return api
            .post(`/api/news/reply/search?page=${params.page}&size=${params.size}`, { ...params, type: NewsRepliesType.like })
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                    onSuccess: onSuccess,
                };
            })
            .catch((error) => error);
    }
);

export const extraReducersGetNewsComments = createAsyncThunk(
    "getNewsComments ",
    async ({ params, onSuccess }: any) => {
        return api
            .post(`/api/news/reply/search?page=${params.page}&size=${params.size}`, { ...params, type: NewsRepliesType.comment })
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                    onSuccess: onSuccess,
                };
            })
            .catch((error) => error);
    }
);
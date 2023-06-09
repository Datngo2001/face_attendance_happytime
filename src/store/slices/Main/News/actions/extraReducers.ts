import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";
import { News, NewsSearchParams } from "../newsSlice";

export const extraReducersCreateNews = createAsyncThunk(
    "createNews",
    async (data: News) => {
        let promise = api
            .post(`/api/news/new/create`, data)
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        toastPromise(promise, {
            titleLoading: "Đang thực hiện...",
            titleSuccess: "Tạo mới thành công",
            titleError: "Tạo mới thất bại",
        });

        return promise;
    }
);

export const extraReducersSearchNews = createAsyncThunk(
    "searchNews",
    async (params: NewsSearchParams) => {
        return api
            .post(`/api/news/new/search?page=${params.page}&size=${params.size}`, params)
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);
    }
);

export const extraReducersUpdateNews = createAsyncThunk(
    "updateNewsCategory",
    async (data: News) => {
        let promise = api
            .put(`/api/news/new/update/${data._id}`, data)
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        toastPromise(promise, {
            titleLoading: "Đang thực hiện...",
            titleSuccess: "Chỉnh sửa thành công",
            titleError: "Chỉnh sửa thất bại",
        });

        return promise;
    }
);

export const extraReducersDeleteNews = createAsyncThunk(
    "deleteNews",
    async (id: number) => {
        let promise = api
            .delete(`/api/news/new/delete/${id}`)
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        toastPromise(promise, {
            titleLoading: "Đang thực hiện...",
            titleSuccess: "Xóa thành công",
            titleError: "Xóa thất bại",
        });

        return promise;
    }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { NewsCategory, NewsCategorySearchParams } from "../newsCategoriesSlice";
import { toastPromise } from "utils";

export const extraReducersCreateNewsCategory = createAsyncThunk(
    "createNewsCategory",
    async (data: NewsCategory) => {
        let promise = api
            .post(`/api/news/category/create`, data)
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

export const extraReducersSearchNewsCategory = createAsyncThunk(
    "searchNewsCategory",
    async (params: NewsCategorySearchParams) => {
        return api
            .post(`/api/news/category/search?page=${params.page}&size=${params.size}`, params)
            .then((response: any) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);
    }
);

export const extraReducersUpdateNewsCategory = createAsyncThunk(
    "updateNewsCategory",
    async (data: NewsCategory) => {
        let promise = api
            .put(`/api/news/category/update/${data._id}`, { name: data.category_name })
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

export const extraReducersDeleteNewsCategory = createAsyncThunk(
    "deleteNewsCategory",
    async (id: number) => {
        let promise = api
            .delete(`/api/news/category/delete/${id}`)
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

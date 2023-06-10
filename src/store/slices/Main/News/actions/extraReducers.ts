import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";
import { News, NewsSearchParams } from "../newsSlice";
import { uploadImgToFirebase } from "utils/uploadImgToFirebase";

export const extraReducersCreateNews = createAsyncThunk(
    "createNews",
    async ({ data, onSuccess }: { data: News, onSuccess: any }) => {
        let promise = new Promise((resolve, reject) => {
            uploadImgToFirebase({
                id: data.banner.name,
                imageUpload: data.banner,
            })
                .then(url => resolve(url))
                .catch(err => reject(err))
        })
            .then(bannerUrl => api.post(`/api/news/new/create`, { ...data, banner: bannerUrl }))
            .then((response: any) => ({
                payload: response.payload,
                message: response.message,
                onSuccess: onSuccess
            }))
            .catch((error) => error)

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

export const extraReducersGetNewsById = createAsyncThunk(
    "getNewsById",
    async (id: string) => {
        return api
            .get(`/api/news/new/get/${id}`)
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
    async ({ data, onSuccess }: { data: News, onSuccess: any }) => {
        let promise = new Promise((resolve, reject) => {
            if (typeof (data.banner) !== "string") {
                uploadImgToFirebase({
                    id: data.banner.name,
                    imageUpload: data.banner,
                })
                    .then(url => resolve(url))
                    .catch(err => reject(err))
            } else {
                resolve(data.banner)
            }
        })
            .then(bannerUrl => api.put(`/api/news/new/update/${data._id}`, { ...data, banner: bannerUrl }))
            .then((response: any) => ({
                payload: response.payload,
                message: response.message,
                onSuccess: onSuccess
            }))
            .catch((error) => error)

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

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils/toastPromise";

export const extraReducersGetListEmployees = createAsyncThunk(
    "getListEmployees",
    async ({ page, size }) => {
        return api
            .post(`/api/agent/search?page=${page}&size=${size}`, {})
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);
    }
);

export const extraReducersGetInfoEmployeeById = createAsyncThunk(
    "getInfoEmployeeById",
    async ({ id }) => {
        return api
            .get(`/api/agent/get/${id}`)
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);
    }
);

export const extraReducersUpdateInfoEmployee = createAsyncThunk(
    "updateInfoEmployee",
    async ({ id, dataUpdate }) => {
        const promise = api
            .put(`/api/agent/update/${id}`, dataUpdate)
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        toastPromise(promise, {
            titleLoading: "Đang thực hiện",
            titleSuccess: "Chỉnh sửa thành công",
            titleError: "Chỉnh sửa thất bại",
        });
        return promise;
    }
);

export const extraReducersCreateInfoEmployee = createAsyncThunk(
    "createEmployee",
    async ({dataCreate }) => {
        const promise = api
            .post(`/api/agent/create`, dataCreate)
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        toastPromise(promise, {
            titleLoading: "Đang thực hiện",
            titleSuccess: "Tạo mới thành công",
            titleError: "Tạo mới thất bại",
        });
        return promise;
    }
);

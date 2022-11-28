import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";

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

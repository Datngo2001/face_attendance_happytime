import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils";

export const extraReducersRegister = createAsyncThunk("register", async (data) => {
    const promise = api
        .post("/auth/register", data)
        .then((response) => {
            console.log("response register", response);
            return {
                payload: response.payload,
                message: response.message,
            };
        })
        .catch((error) => error);

    toastPromise(promise, {
        titleLoading: "Đang đang ký...",
        titleSuccess: "Đăng ký thành công",
        titleError: "Đăng ký không thành công",
    });

    return promise;
});

export const extraReducersCheckExists = createAsyncThunk("checkExists", async (data) => {
    return api
        .post("/auth/validate", data)
        .then((response) => {
            return {
                payload: response.payload,
                message: response.message,
            };
        })
        .catch((error) => error);
});

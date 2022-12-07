import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils/toastPromise";

export const extraReducersGetInfoCompany = createAsyncThunk(
    "getInfoCompany",
    async () => {
        return api
            .get("/api/tenant/get")
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);
    }
);

export const extraReducersUpdateInfoCompany = createAsyncThunk(
    "updateInfoCompany",
    async ({ dataUpdate }) => {
        const promise = api
            .put("/api/tenant/update", dataUpdate)
            .then((response) => {
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

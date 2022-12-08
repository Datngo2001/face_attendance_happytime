import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils";

export const extraReducersGetInfoConfig = createAsyncThunk("getInfoConfig", async () => {
    return api
        .get("/api/time_keeping/get")
        .then((response) => {
            return {
                payload: response.payload,
                message: response.message,
            };
        })
        .catch((error) => error);
});

export const extraReducersUpdateInfoConfig = createAsyncThunk(
    "updateInfoConfig",
    async ({ dataUpdate }) => {
        const promise = api
            .get("/api/time_keeping/update", dataUpdate)
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

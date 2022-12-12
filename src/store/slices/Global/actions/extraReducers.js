import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../config/api";

export const extraReducersGetInfoUser = createAsyncThunk("GetInfoUser", async () => {
    return api
        .get("/api/agent/get_by_tenant")
        .then((response) => {
            return {
                payload: response.payload,
                message: response.message,
            };
        })
        .catch((error) => error);
});

import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetInfoUser } from "./actions/extraReducers";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        status: "fail",
        loading: false,
        userInfor: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(extraReducersGetInfoUser.fulfilled, (state, { payload }) => {
            if (payload.message === "success") {
                state.userInfor = payload.payload;
            }
        });
    },
});

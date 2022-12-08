import { createSlice } from "@reduxjs/toolkit";
import {
    extraReducersGetInfoConfig,
    extraReducersUpdateInfoConfig,
} from "./actions/extraReducers";

const attendanceSettingsSlice = createSlice({
    name: "attendanceSettings",
    initialState: {
        loading: false,
        status: "fail",
        infoConfig: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersGetInfoConfig.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(extraReducersGetInfoConfig.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.message === "success") {
                    state.infoConfig = payload.payload;
                }
            });
        builder.addCase(
            extraReducersUpdateInfoConfig.fulfilled,
            (state, { payload }) => {}
        );
    },
});

export default attendanceSettingsSlice;

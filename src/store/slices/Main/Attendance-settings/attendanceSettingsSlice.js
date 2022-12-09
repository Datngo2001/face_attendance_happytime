import { createSlice } from "@reduxjs/toolkit";
import {
    extraReducersCreateIPWifi,
    extraReducersGetInfoConfig,
    extraReducersGetListDeviceID,
    extraReducersGetListIPWifi,
    extraReducersUpdateInfoConfig,
} from "./actions/extraReducers";
import { reducersUpdateStatusState } from "./actions/reducers";

const attendanceSettingsSlice = createSlice({
    name: "attendanceSettings",
    initialState: {
        loading: false,
        status: "fail",
        infoConfig: {},
        listOfIPWifi: [],
        listOfDeviceID: [],
        totalPages: 0,
        totalIPWifi: 0,
        render: false,
    },
    reducers: {
        updateStatusState: reducersUpdateStatusState,
    },
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
        builder
            .addCase(extraReducersCreateIPWifi.pending, (state, { payload }) => {
                state.shouldRender = true;
            })
            .addCase(extraReducersCreateIPWifi.fulfilled, (state, { payload }) => {
                state.shouldRender = false;
                if (payload.message === "success") {
                    state.status = "success";
                }
            });
        builder
            .addCase(extraReducersGetListIPWifi.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(extraReducersGetListIPWifi.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.message === "success") {
                    state.listOfIPWifi = payload.payload.items;
                    state.totalPages = payload.payload.total_pages;
                    state.totalIPWifi = payload.payload.total_items;
                }
            });

        builder
            .addCase(extraReducersGetListDeviceID.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(extraReducersGetListDeviceID.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.message === "success") {
                    state.listOfDeviceID = payload.payload.items;
                    state.totalPages = payload.payload.total_pages;
                    state.totalIPWifi = payload.payload.total_items;
                }
            });
    },
});

export const { updateStatusState } = attendanceSettingsSlice.actions;
export default attendanceSettingsSlice;

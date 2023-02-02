import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateIPWifi,
  extraReducersGetInfoConfig,
  extraReducersGetListDeviceID,
  extraReducersGetListIPWifi,
  extraReducersUpdateInfoConfig,
} from "./actions/extraReducers";
import { reducersUpdateStatusState } from "./actions/reducers";

export type InfoConfig = {
  is_enable: boolean;
};

export type AttendanceSettings = {
  loading: boolean;
  status: string;
  infoConfig: InfoConfig;
  listOfIPWifi: [];
  listOfDeviceID: [];
  totalPages: number;
  totalIPWifi: number;
  render: boolean;
  shouldRender: boolean;
};

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
    shouldRender: false,
  } as AttendanceSettings,
  reducers: {
    updateStatusState: reducersUpdateStatusState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(extraReducersGetInfoConfig.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetInfoConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.infoConfig = payload;
          }
        }
      );
    builder.addCase(
      extraReducersUpdateInfoConfig.fulfilled,
      (state, { payload }) => {}
    );
    builder
      .addCase(extraReducersCreateIPWifi.pending, (state, { payload }) => {
        state.shouldRender = true;
      })
      .addCase(
        extraReducersCreateIPWifi.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.shouldRender = false;
          if (message === "success") {
            state.status = "success";
          }
        }
      );
    builder
      .addCase(extraReducersGetListIPWifi.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListIPWifi.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.listOfIPWifi = payload.items;
            state.totalPages = payload.total_pages;
            state.totalIPWifi = payload.total_items;
          }
        }
      );

    builder
      .addCase(extraReducersGetListDeviceID.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListDeviceID.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.listOfDeviceID = payload.items;
            state.totalPages = payload.total_pages;
            state.totalIPWifi = payload.total_items;
          }
        }
      );
  },
});

export const { updateStatusState } = attendanceSettingsSlice.actions;
export default attendanceSettingsSlice;

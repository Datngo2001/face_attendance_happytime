import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateGPSConfig,
  extraReducersCreateIPWifi,
  extraReducersGetInfoConfig,
  extraReducersGetListDeviceID,
  extraReducersGetListGPSConfig,
  extraReducersGetListIPWifi,
  extraReducersUpdateGPSConfig,
  extraReducersUpdateInfoConfig,
} from "./actions/extraReducers";
import {
  reducersSetCurrentGPDConfig,
  reducersUpdateStatusState,
} from "./actions/reducers";

export type InfoConfig = {
  is_enable: boolean;
};

export type AttendanceSettings = {
  loading: boolean;
  status: string;
  infoConfig: InfoConfig;
  listOfIPWifi: [];
  listOfDeviceID: [];
  GPSConfig: GPSConfig;
  listOfGPSConfig: GPSConfig[];
  totalPages: number;
  totalIPWifi: number;
  totalGPSConfig: number;
  render: boolean;
  shouldRender: boolean;
};

export type GPSConfig = {
  _id?: string;
  tenant_id?: string;
  created_by: any;
  last_updated_by: any;
  gps_name: string;
  address: string;
  lat: number;
  lon: number;
  radius: number;
  created_date: number;
};

const attendanceSettingsSlice = createSlice({
  name: "attendanceSettings",
  initialState: {
    loading: false,
    status: "fail",
    infoConfig: {},
    listOfIPWifi: [],
    listOfDeviceID: [],
    listOfGPSConfig: [],
    totalPages: 0,
    totalIPWifi: 0,
    render: false,
    shouldRender: false,
  } as AttendanceSettings,
  reducers: {
    updateStatusState: reducersUpdateStatusState,
    setCurrentGPDConfig: reducersSetCurrentGPDConfig,
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

    builder
      .addCase(extraReducersGetListGPSConfig.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListGPSConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.listOfGPSConfig = payload.items;
            state.totalPages = payload.total_pages;
            state.totalGPSConfig = payload.total_items;
          }
        }
      );
    builder
      .addCase(extraReducersCreateGPSConfig.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersCreateGPSConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
        }
      );
    builder
      .addCase(extraReducersUpdateGPSConfig.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersUpdateGPSConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
        }
      );
  },
});

export const { updateStatusState, setCurrentGPDConfig } =
  attendanceSettingsSlice.actions;
export default attendanceSettingsSlice;

import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateBssid,
  extraReducersCreateGPSConfig,
  extraReducersCreateIPWifi,
  extraReducersDeleteBssid,
  extraReducersDeleteGPSConfig,
  extraReducersDeleteIPWifi,
  extraReducersGetInfoConfig,
  extraReducersGetListBssid,
  extraReducersGetListDeviceID,
  extraReducersGetListGPSConfig,
  extraReducersGetListIPWifi,
  extraReducersUpdateBssid,
  extraReducersUpdateGPSConfig,
  extraReducersUpdateIPWifi,
  extraReducersUpdateIPWifiStatus,
  extraReducersUpdateInfoConfig,
} from "./actions/extraReducers";
import {
  reducersSetCurrentBssid,
  reducersSetCurrentGPDConfig,
  reducersSetCurrentIPWifi,
} from "./actions/reducers";

export type InfoConfig = {
  is_enable: boolean;
};

export type AttendanceSettingsState = {
  loading: boolean;
  infoConfig: InfoConfig;
  iPWifi: IPWifi;
  listOfIPWifi: IPWifi[];
  listOfDeviceID: [];
  GPSConfig: GPSConfig;
  listOfGPSConfig: GPSConfig[];
  bssid: Bssid;
  listOfBssid: Bssid[];
  totalPages: number;
  totalIPWifi: number;
  totalGPSConfig: number;
  totalBssid: number;
  lastCreateSuccess: number;
  lastUpdateSuccess: number;
  lastDeleteSuccess: number;
};

export type IPWifi = {
  _id?: string;
  tenant_id?: string;
  created_by: any;
  last_updated_by: any;
  ip_name: string;
  ip_name_unsigned: string;
  ip_address: string;
  is_active: "true" | "false";
  created_date: number;
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

export type Bssid = {
  _id?: string;
  tenant_id?: string;
  created_by: any;
  last_updated_by: any;
  bssid_name: string;
  bssid_name_unsigned: string;
  bssid_address: string;
  created_date: number;
};

const attendanceSettingsSlice = createSlice({
  name: "attendanceSettings",
  initialState: {
    loading: false,
    infoConfig: {},
    listOfIPWifi: [],
    listOfDeviceID: [],
    listOfGPSConfig: [],
    listOfBssid: [],
    totalPages: 0,
    totalIPWifi: 0,
  } as AttendanceSettingsState,
  reducers: {
    setCurrentIPWifi: reducersSetCurrentIPWifi,
    setCurrentGPDConfig: reducersSetCurrentGPDConfig,
    setCurrentBssid: reducersSetCurrentBssid,
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

    // IPWifi

    builder
      .addCase(extraReducersGetListIPWifi.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListIPWifi.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.listOfIPWifi = payload.items.map((i) => ({
              ...i,
              is_active: i.is_active.toString(),
            }));
            state.totalPages = payload.total_pages;
            state.totalIPWifi = payload.total_items;
          }
        }
      );
    builder
      .addCase(extraReducersCreateIPWifi.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersCreateIPWifi.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastCreateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(extraReducersUpdateIPWifi.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersUpdateIPWifi.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastUpdateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(
        extraReducersUpdateIPWifiStatus.pending,
        (state, { payload }) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersUpdateIPWifiStatus.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastUpdateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(extraReducersDeleteIPWifi.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersDeleteIPWifi.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastDeleteSuccess = Date.now();
          }
        }
      );

    // DeviceID

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

    // GPSConfig

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
          if (message === "success") {
            state.lastCreateSuccess = Date.now();
          }
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
          if (message === "success") {
            state.lastUpdateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(extraReducersDeleteGPSConfig.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersDeleteGPSConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastDeleteSuccess = Date.now();
          }
        }
      );

    // Bssid

    builder
      .addCase(extraReducersGetListBssid.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListBssid.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.listOfBssid = payload.items;
            state.totalPages = payload.total_pages;
            state.totalBssid = payload.total_items;
          }
        }
      );
    builder
      .addCase(extraReducersCreateBssid.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersCreateBssid.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastCreateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(extraReducersUpdateBssid.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersUpdateBssid.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastUpdateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(extraReducersDeleteBssid.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersDeleteBssid.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastDeleteSuccess = Date.now();
          }
        }
      );
  },
});

export const { setCurrentIPWifi, setCurrentGPDConfig, setCurrentBssid } =
  attendanceSettingsSlice.actions;
export default attendanceSettingsSlice;

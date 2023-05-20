import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateAttendanceConfig,
  extraReducersCreateBssid,
  extraReducersCreateGPSConfig,
  extraReducersCreateIPWifi,
  extraReducersDeleteBssid,
  extraReducersDeleteGPSConfig,
  extraReducersDeleteIPWifi,
  extraReducersGetAttendanceConfig,
  extraReducersGetListBssid,
  extraReducersGetListDeviceID,
  extraReducersGetListGPSConfig,
  extraReducersGetListIPWifi,
  extraReducersUpdateAttendanceConfig,
  extraReducersUpdateBssid,
  extraReducersUpdateDeviceIDStatus,
  extraReducersUpdateGPSConfig,
  extraReducersUpdateIPWifi,
  extraReducersUpdateIPWifiStatus,
} from "./actions/extraReducers";
import {
  reducersSetCurrentBssid,
  reducersSetCurrentGPDConfig,
  reducersSetCurrentIPWifi,
} from "./actions/reducers";
import { BaseState } from "store/slices";
import { mapPagiantionReponse } from "utils/sliceUtil";

export class AttendanceSettingsState extends BaseState {
  attendanceConfig?: AttendanceConfig;
  iPWifi: IPWifi;
  listOfIPWifi: IPWifi[];
  deviceID: DeviceID;
  listOfDeviceID: DeviceID[];
  GPSConfig: GPSConfig;
  listOfGPSConfig: GPSConfig[];
  bssid: Bssid;
  listOfBssid: Bssid[];
  lastCreateSuccess: number;
  lastUpdateSuccess: number;
  lastDeleteSuccess: number;
}

export type AttendanceConfig = {
  _id?: string;
  tenant_id?: string;
  is_deleted: boolean;
  modules: [
    {
      is_enabled: boolean;
      functions: [
        {
          name: "using_wifi";
          is_enabled: boolean;
        },
        {
          name: "using_bssid";
          is_enabled: boolean;
        },
        {
          name: "using_gps";
          is_enabled: boolean;
        },
        {
          name: "using_qr_code";
          is_enabled: boolean;
        },
        {
          name: "no_limitation";
          is_enabled: boolean;
        }
      ];
      name: "attendance_using_phone";
    }
  ];
};

export type DeviceID = {
  agent_id: string;
  is_deleted: boolean;
  device_id: string;
  device_name: string;
  status: boolean;
  department: string;
  agent_view: {
    id: string;
    name: string;
    avatar: string;
    position: string;
  };
  created_date: number;
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
    attendanceConfig: null,
    listOfIPWifi: [],
    listOfDeviceID: [],
    listOfGPSConfig: [],
    listOfBssid: [],
    total_pages: 0,
  } as AttendanceSettingsState,
  reducers: {
    setCurrentIPWifi: reducersSetCurrentIPWifi,
    setCurrentGPDConfig: reducersSetCurrentGPDConfig,
    setCurrentBssid: reducersSetCurrentBssid,
  },
  extraReducers: (builder) => {
    // AttendanceConfig
    builder
      .addCase(
        extraReducersGetAttendanceConfig.pending,
        (state, { payload }) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetAttendanceConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success" && payload != null) {
            state.attendanceConfig = payload;
          }
        }
      );
    builder
      .addCase(
        extraReducersCreateAttendanceConfig.pending,
        (state, { payload }) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersCreateAttendanceConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success" && payload != null) {
            state.lastCreateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(
        extraReducersUpdateAttendanceConfig.pending,
        (state, { payload }) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersUpdateAttendanceConfig.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success" && payload != null) {
            state.lastCreateSuccess = Date.now();
          }
        }
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
            mapPagiantionReponse(state, payload);
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
            mapPagiantionReponse(state, payload);
          }
        }
      );

    builder
      .addCase(
        extraReducersUpdateDeviceIDStatus.pending,
        (state, { payload }) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersUpdateDeviceIDStatus.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastUpdateSuccess = Date.now();
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
            mapPagiantionReponse(state, payload);
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
            mapPagiantionReponse(state, payload);
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

import { AttendanceSettingsState } from "../attendanceSettingsSlice";

export const reducersSetCurrentIPWifi = (
  state: AttendanceSettingsState,
  action: { payload: { id: string } }
) => {
  state.iPWifi = state.listOfIPWifi.find((c) => c._id === action.payload.id);
};

export const reducersSetCurrentGPDConfig = (
  state: AttendanceSettingsState,
  action: { payload: { id: string } }
) => {
  state.GPSConfig = state.listOfGPSConfig.find(
    (c) => c._id === action.payload.id
  );
};

export const reducersSetCurrentBssid = (
  state: AttendanceSettingsState,
  action: { payload: { id: string } }
) => {
  state.bssid = state.listOfBssid.find((c) => c._id === action.payload.id);
};

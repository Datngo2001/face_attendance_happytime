import { AttendanceSettingsState } from "../attendanceSettingsSlice";

export const reducersUpdateStatusState = (
  state: AttendanceSettingsState,
  action
) => {
  state.status = action.payload;
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
  state.Bssid = state.listOfBssid.find((c) => c._id === action.payload.id);
};

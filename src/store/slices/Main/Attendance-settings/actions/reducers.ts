import { AttendanceSettings } from "../attendanceSettingsSlice";

export const reducersUpdateStatusState = (
  state: AttendanceSettings,
  action
) => {
  state.status = action.payload;
};

export const reducersSetCurrentGPDConfig = (
  state: AttendanceSettings,
  action: { payload: { id: string } }
) => {
  state.GPSConfig = state.listOfGPSConfig.find(
    (c) => c._id === action.payload.id
  );
};

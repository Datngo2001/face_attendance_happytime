import { AttendanceSettings } from "../attendanceSettingsSlice";

export const reducersUpdateStatusState = (
  state: AttendanceSettings,
  action
) => {
  state.status = action.payload;
};

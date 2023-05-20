import { AttendanceConfig } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";

export const defaultValue: AttendanceConfig = {
  is_deleted: false,
  modules: [
    {
      is_enabled: true,
      functions: [
        {
          name: "using_wifi",
          is_enabled: true,
        },
        {
          name: "using_bssid",
          is_enabled: false,
        },
        {
          name: "using_gps",
          is_enabled: false,
        },
        {
          name: "using_qr_code",
          is_enabled: false,
        },
        {
          name: "no_limitation",
          is_enabled: false,
        },
      ],
      name: "attendance_using_phone",
    },
  ],
};

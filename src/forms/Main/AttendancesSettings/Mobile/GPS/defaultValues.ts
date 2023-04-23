import { GPSConfig } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";

export const defaultValues: GPSConfig = {
  created_by: undefined,
  last_updated_by: undefined,
  gps_name: "",
  address: "",
  lat: 0,
  lon: 0,
  radius: 0,
  created_date: 0,
};

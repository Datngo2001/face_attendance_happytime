import { IPWifi } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";

export const defaultValues: IPWifi = {
  created_by: undefined,
  last_updated_by: undefined,
  ip_name: "",
  ip_name_unsigned: "",
  ip_address: "",
  created_date: 0,
  is_active: "true",
};

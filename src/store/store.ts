import { configureStore } from "@reduxjs/toolkit";
import {
  attendancesSlice,
  authSlice,
  companySlice,
  employeesSlice,
} from "./slices";
import { globalSlice } from "./slices/Global/globalSlice";
import attendanceSettingsSlice from "./slices/Main/Attendance-settings/attendanceSettingsSlice";

const store = configureStore({
  reducer: {
    attendances: attendancesSlice.reducer,
    employees: employeesSlice.reducer,
    company: companySlice.reducer,
    attendanceSettings: attendanceSettingsSlice.reducer,
    auth: authSlice.reducer,
    global: globalSlice.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

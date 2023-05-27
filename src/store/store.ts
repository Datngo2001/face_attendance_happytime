import { configureStore } from "@reduxjs/toolkit";
import {
  attendancesSlice,
  authSlice,
  companySlice,
  confirmModalSlice,
  departmentsSlice,
  employeesSlice,
  permissionsSlice,
  shiftAssignmentsSlice,
  shiftsSlice,
} from "./slices";
import { globalSlice } from "./slices/Global/globalSlice";
import attendanceSettingsSlice from "./slices/Main/Attendance-settings/attendanceSettingsSlice";
import reportsSlice from "./slices/Main/Report/reportsSlice";

const store = configureStore({
  reducer: {
    confirmModal: confirmModalSlice.reducer,
    attendances: attendancesSlice.reducer,
    employees: employeesSlice.reducer,
    permissions: permissionsSlice.reducer,
    company: companySlice.reducer,
    attendanceSettings: attendanceSettingsSlice.reducer,
    auth: authSlice.reducer,
    global: globalSlice.reducer,
    shifts: shiftsSlice.reducer,
    departments: departmentsSlice.reducer,
    shiftAssignments: shiftAssignmentsSlice.reducer,
    reports: reportsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

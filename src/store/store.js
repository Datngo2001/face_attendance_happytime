import { configureStore } from "@reduxjs/toolkit";
import { authSlice, employeesSlice } from "./slices";
import { globalSlice } from "./slices/Global/globalSlice";
import attendanceSettingsSlice from "./slices/Main/Attendance-settings/attendanceSettingsSlice";
import companySlice from "./slices/Main/Company/companySlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
        company: companySlice.reducer,
        attendanceSettings: attendanceSettingsSlice.reducer,
        auth: authSlice.reducer,
        global: globalSlice.reducer,
    },
});

export default store;

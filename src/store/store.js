import { configureStore } from "@reduxjs/toolkit";
import { authSlice, employeesSlice } from "./slices";

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;

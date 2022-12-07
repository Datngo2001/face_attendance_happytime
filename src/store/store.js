import { configureStore } from "@reduxjs/toolkit";
import { authSlice, employeesSlice } from "./slices";
import companySlice from "./slices/Main/Company/companySlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
        company: companySlice.reducer,
        auth: authSlice.reducer,
    },
});

export default store;

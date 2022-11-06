import { configureStore } from "@reduxjs/toolkit";
import { employeesSlice } from "./slices";

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer,
    },
});

export default store;

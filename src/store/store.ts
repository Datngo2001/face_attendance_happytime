import { configureStore } from "@reduxjs/toolkit";
import {
  attendancesSlice,
  authSlice,
  companySlice,
  confirmModalSlice
} from "./slices";
import { globalSlice } from "./slices/Global/globalSlice";

const store = configureStore({
  reducer: {
    attendances: attendancesSlice.reducer,
    auth: authSlice.reducer,
    global: globalSlice.reducer,
    company: companySlice.reducer,
    confirmModal: confirmModalSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

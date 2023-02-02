import { createSlice } from "@reduxjs/toolkit";
import * as loginACtions from "./Login/loginActions";
import * as registerActions from "./Register/registerActions";

export type AuthState = {
  status: boolean;
  loading: boolean;
  validate: boolean;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    loading: false,
    validate: false,
  } as AuthState,
  reducers: {
    updateStatusState: loginACtions.reducersUpdateStatusState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginACtions.extraReducersLogin.pending, (state, payload) => {})
      .addCase(
        loginACtions.extraReducersLogin.fulfilled,
        (state, { payload: { payload, message } }) => {
          if (message === "success") {
            state.status = true;
            sessionStorage.setItem("token", payload.token);
            sessionStorage.setItem("isLoggedIn", "true");
          }
        }
      );
    builder.addCase(
      registerActions.extraReducersRegister.fulfilled,
      (state, { payload: { payload, message } }) => {
        if (message === "success") {
          state.status = true;
          sessionStorage.removeItem("dataRegister");
        }
      }
    );
    builder.addCase(
      registerActions.extraReducersRequestOtp.fulfilled,
      (state, { payload: { payload, message } }) => {
        if (message === "success") {
          state.status = true;
          sessionStorage.setItem("otp", payload.otp_code);
        }
      }
    );
    // builder
    //     .addCase(
    //         registerActions.extraReducersCheckExists.pending,
    //         (state, payload) => {
    //             state.loading = true;
    //         }
    //     )
    //     .addCase(
    //         registerActions.extraReducersCheckExists.fulfilled,
    //         (state, { payload }) => {
    //             state.loading = false;
    //             if (payload.payload === true) {
    //                 state.validate = true;
    //             }
    //         }
    //     );
  },
});

export const { updateStatusState } = authSlice.actions;
export default authSlice;

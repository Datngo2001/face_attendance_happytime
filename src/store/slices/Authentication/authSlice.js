import { createSlice } from "@reduxjs/toolkit";
import * as loginACtions from "./Login/loginActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
    },
    reducers: {
        updateStatusState: loginACtions.reducersUpdateStatusState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginACtions.extraReducersLogin.pending, (state, payload) => {})
            .addCase(loginACtions.extraReducersLogin.fulfilled, (state, { payload }) => {
                if (payload.message === "success") {
                    state.status = true;
                    sessionStorage.setItem("token", payload.payload.token);
                    sessionStorage.setItem("isLoggedIn", true);
                }
            });
    },
});

export const { updateStatusState } = authSlice.actions;
export default authSlice;

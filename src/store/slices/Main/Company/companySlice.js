import { createSlice } from "@reduxjs/toolkit";
import {
    extraReducersGetInfoCompany,
    extraReducersUpdateInfoCompany,
} from "./actions/extraReducers";
import { reducersUpdateStatusState } from "./actions/reducers";

const companySlice = createSlice({
    name: "company",
    initialState: {
        status: "fail",
        loading: false,
        infoOfCompany: {},
    },
    reducers: {
        updateStatusState: reducersUpdateStatusState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersGetInfoCompany.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(extraReducersGetInfoCompany.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.message === "success") {
                    state.infoOfCompany = payload.payload;
                }
            });
        builder.addCase(
            extraReducersUpdateInfoCompany.fulfilled,
            (state, { payload }) => {
                if (payload.message === "success") {
                    state.status = "success";
                }
            }
        );
    },
});

export const { updateStatusState } = companySlice.actions;
export default companySlice;

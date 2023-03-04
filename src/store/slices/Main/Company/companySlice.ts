import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersGetInfoCompany,
  extraReducersUpdateInfoCompany,
} from "./actions/extraReducers";
import { reducersUpdateStatusState } from "./actions/reducers";

export type CompanyInfo = {
  _id: string;
  avatar: string;
  status: string;
  scale: string;
  company_name: string;
  company_shorthand: string;
  website: string;
  hotline: string;
  company_mail: string;
  fanpage: string;
  tax_number: string;
};

export type CompanyState = {
  status: string;
  loading: boolean;
  infoOfCompany: CompanyInfo;
};

const companySlice = createSlice({
  name: "company",
  initialState: {
    status: "fail",
    loading: false,
    infoOfCompany: {} as CompanyInfo,
  } as CompanyState,
  reducers: {
    updateStatusState: reducersUpdateStatusState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(extraReducersGetInfoCompany.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetInfoCompany.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.infoOfCompany = payload;
          }
        }
      );
    builder.addCase(
      extraReducersUpdateInfoCompany.fulfilled,
      (state, { payload: { payload, message } }) => {
        if (message === "success") {
          state.status = "success";
        }
      }
    );
  },
});

export const { updateStatusState } = companySlice.actions;
export default companySlice;

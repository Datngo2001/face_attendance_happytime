import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";
import { ReportSearchParams } from "../reportsSlice";

export const extraReducersGetListReport = createAsyncThunk(
  "getListReport",
  (params: ReportSearchParams) => {
    const body = { ...params, ...params.date_range, date_range: undefined };
    return api
      .post(
        `/api/attendance/tenant/report?page=${params.page}&size=${params.size}`,
        body
      )
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

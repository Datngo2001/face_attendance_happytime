import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { ShiftAssignmentResultSearchParam } from "../shiftAssignmentsResultSlice";

export const extraReducersGetListShiftAssignmentsResult = createAsyncThunk(
  "getListShiftAssignmentsResult",
  async (params: ShiftAssignmentResultSearchParam) => {
    return api
      .post(
        `/api/shift/result/get/by_tenant?page=${params.page}&size=${params.size}`,
        { ...params, ...params.date_range, date_range: undefined }
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

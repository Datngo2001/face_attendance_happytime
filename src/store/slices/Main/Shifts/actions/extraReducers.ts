import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";

export const extraReducersGetListShifts = createAsyncThunk(
  "getListShifts",
  async ({ page, size }: any) => {
    return api
      .post(`/api/shift_schedule/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

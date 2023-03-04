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

export const extraReducersGetListShiftTypes = createAsyncThunk(
  "getListShiftTypes",
  async () => {
    return api
      .get(`/default/shift_type/get_all`)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersCreateShift = createAsyncThunk(
  "createShift",
  async ({ data, onSuccess }: any) => {
    return api
      .post(`/api/shift_schedule/create`, data)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
          onSuccess,
        };
      })
      .catch((error) => error);
  }
);

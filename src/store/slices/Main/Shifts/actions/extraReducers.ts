import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";

export const extraReducersGetListShifts = createAsyncThunk(
  "getListShifts",
  async ({ page, size, params }: any) => {
    console.log(params);
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

export const extraReducersGetShiftById = createAsyncThunk(
  "getShiftById",
  async ({ id }: any) => {
    return api
      .get(`/api/shift_schedule/get/${id}`)
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
    const promise = api
      .post(`/api/shift_schedule/create`, data)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
          onSuccess,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang thực hiện",
      titleSuccess: "Tạo mới thành công",
      titleError: "Tạo mới thất bại",
    });

    return promise;
  }
);

export const extraReducersUpdateShift = createAsyncThunk(
  "updateShift",
  async ({ data, onSuccess }: any) => {
    const promise = api
      .put(`/api/shift_schedule/update/${data._id}`, data)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
          onSuccess,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang thực hiện",
      titleSuccess: "Cập nhật thành công",
      titleError: "Cập nhật thất bại",
    });

    return promise;
  }
);

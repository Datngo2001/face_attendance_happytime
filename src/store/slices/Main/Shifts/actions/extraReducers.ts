import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";
import { ShiftSeachParams } from "../shiftsSlice";
import { StatusActive } from "utils/selectBoxOptions";

export const extraReducersGetListShifts = createAsyncThunk(
  "getListShifts",
  async (params: ShiftSeachParams) => {

    let is_enabled = undefined;

    if (params.is_enabled === StatusActive.Active) {
      is_enabled = true
    }
    else if (params.is_enabled === StatusActive.InActive) {
      is_enabled = false
    }

    return api
      .post(
        `/api/shift_schedule/search?page=${params.page}&size=${params.size}`,
        { ...params, is_enabled }
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

export const extraReducersUpdateShiftStatus = createAsyncThunk(
  "updateShiftStatus",
  async ({ id, isEnabled }: any) => {
    const promise = api
      .put(`/api/shift_schedule/update/${id}`, { is_enabled: isEnabled })
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
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

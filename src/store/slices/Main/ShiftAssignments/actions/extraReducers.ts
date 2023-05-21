import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";

export const extraReducersGetListShiftAssignments = createAsyncThunk(
  "getListShiftAssignments",
  async ({ page, size, params }: any) => {
    console.log(params);
    return api
      .post(`/api/shift_assignment/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersGetShiftAssignmentById = createAsyncThunk(
  "getShiftAssignmentById",
  async ({ id }: any) => {
    return api
      .get(`/api/shift_assignment/get/${id}`)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersCreateShiftAssignment = createAsyncThunk(
  "createShiftAssignment",
  async ({ data, onSuccess }: any) => {
    const promise = api
      .post(`/api/shift_assignment/create`, data)
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

export const extraReducersUpdateShiftAssignment = createAsyncThunk(
  "updateShiftAssignment",
  async ({ data, onSuccess }: any) => {
    const promise = api
      .put(`/api/shift_assignment/update/${data._id}`, data)
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
      .put(`/api/shift_assignment/update/${id}`, { is_enabled: isEnabled })
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

export const extraReducersDeleteShiftAssignment = createAsyncThunk(
  "deleteShiftAssignment",
  async ({ id }: any) => {
    const promise = api
      .delete(`/api/shift_assignment/delete/${id}`)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang thực hiện",
      titleSuccess: "Xóa thành công",
      titleError: "Xóa thất bại",
    });

    return promise;
  }
);

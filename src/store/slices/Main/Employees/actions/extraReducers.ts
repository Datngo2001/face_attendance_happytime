import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils/toastPromise";

export const extraReducersGetListEmployees = createAsyncThunk(
  "getListEmployees",
  async ({ page, size }: any) => {
    return api
      .post(`/api/agent/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersGetInfoEmployeeById = createAsyncThunk(
  "getInfoEmployeeById",
  async ({ id }: any) => {
    return api
      .get(`/api/agent/get/${id}`)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersUpdateInfoEmployee = createAsyncThunk(
  "updateInfoEmployee",
  async ({ id, dataUpdate }: any) => {
    const promise = api
      .put(`/api/agent/update/${id}`, dataUpdate)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang thực hiện...",
      titleSuccess: "Chỉnh sửa thành công",
      titleError: "Chỉnh sửa thất bại",
    });
    return promise;
  }
);

export const extraReducersCreateInfoEmployee = createAsyncThunk(
  "createEmployee",
  async ({ dataCreate }: any) => {
    const promise = api
      .post(`/api/agent/create`, dataCreate)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
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

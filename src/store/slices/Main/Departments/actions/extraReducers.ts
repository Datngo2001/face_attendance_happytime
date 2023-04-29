import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";

export const extraReducersGetDepartments = createAsyncThunk(
  "getDepartments",
  async () => {
    return api
      .get(`/api/department/get_by_tenant`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersCreateDepartments = createAsyncThunk(
  "createDepartments",
  async ({ data }: any) => {
    let promise = api
      .post(`/api/department/create`, data)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang thực hiện...",
      titleSuccess: "Thêm thành công",
      titleError: "Thêm thất bại",
    });

    return promise;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";
import { CreateDepartmentDto } from "../departmentsSlice";

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
  async (data: CreateDepartmentDto) => {
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

export const extraReducersDeleteDepartments = createAsyncThunk(
  "deleteDepartments",
  async (id: string) => {
    const promise = api
      .delete(`/api/department/delete/${id}`)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang thực hiện...",
      titleSuccess: "Xóa thành công",
      titleError: "Xóa thất bại",
    });

    return promise;
  }
);

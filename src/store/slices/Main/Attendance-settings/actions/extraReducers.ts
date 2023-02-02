import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils";

export const extraReducersGetInfoConfig = createAsyncThunk(
  "getInfoConfig",
  async () => {
    return api
      .get("/api/time_keeping/get")
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersUpdateInfoConfig = createAsyncThunk(
  "updateInfoConfig",
  async ({ dataUpdate }: any) => {
    const promise = api
      .get("/api/time_keeping/update", dataUpdate)
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

export const extraReducersGetListIPWifi = createAsyncThunk(
  "getListIPWifi",
  async ({ page, size }: any) => {
    return api
      .post(`/api/ip_config/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersCreateIPWifi = createAsyncThunk(
  "createIPWifi",
  async ({ data }: any) => {
    const promise = api
      .post("/api/ip_config/create", data)
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

export const extraReducersGetListDeviceID = createAsyncThunk(
  "getListDeviceID",
  async ({ page, size }: any) => {
    return api
      .post(`/api/device_config/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

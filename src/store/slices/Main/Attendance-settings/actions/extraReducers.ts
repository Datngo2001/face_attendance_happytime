import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";

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

export const extraReducersUpdateIPWifi = createAsyncThunk(
  "updateIPWifi",
  async ({ data }: any) => {
    const promise = api
      .put(`/api/ip_config/update/${data._id}`, data)
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

export const extraReducersUpdateIPWifiStatus = createAsyncThunk(
  "updateIPWifiStatus",
  async ({ id, is_active }: any) => {
    const promise = api
      .put(`/api/ip_config/update/${id}`, { is_active })
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

export const extraReducersDeleteIPWifi = createAsyncThunk(
  "deleteIPWifi",
  async ({ id }: any) => {
    const promise = api
      .delete(`/api/ip_config/delete/${id}`)
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

export const extraReducersGetListGPSConfig = createAsyncThunk(
  "getListGPSConfig",
  async ({ page, size }: any) => {
    return api
      .post(`/api/gps_config/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersCreateGPSConfig = createAsyncThunk(
  "createGPSConfig",
  async ({ data }: any) => {
    const promise = api
      .post("/api/gps_config/create", data)
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

export const extraReducersUpdateGPSConfig = createAsyncThunk(
  "updateGPSConfig",
  async ({ data }: any) => {
    const promise = api
      .put(`/api/gps_config/update/${data._id}`, data)
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

export const extraReducersDeleteGPSConfig = createAsyncThunk(
  "deleteGPSConfig",
  async ({ id }: any) => {
    const promise = api
      .delete(`/api/gps_config/delete/${id}`)
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

export const extraReducersGetListBssid = createAsyncThunk(
  "getListBssid",
  async ({ page, size }: any) => {
    return api
      .post(`/api/bssid_config/search?page=${page}&size=${size}`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersCreateBssid = createAsyncThunk(
  "createBssid",
  async ({ data }: any) => {
    const promise = api
      .post("/api/bssid_config/create", data)
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

export const extraReducersUpdateBssid = createAsyncThunk(
  "updateBssid",
  async ({ data }: any) => {
    const promise = api
      .put(`/api/bssid_config/update/${data._id}`, data)
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

export const extraReducersDeleteBssid = createAsyncThunk(
  "deleteBssid",
  async ({ id }: any) => {
    const promise = api
      .delete(`/api/bssid_config/delete/${id}`)
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

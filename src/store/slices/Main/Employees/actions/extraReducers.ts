import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils/toastPromise";
import { EmployeeSearchParams, StatusUsingHappyTime } from "../employeesSlice";
import { uploadImgToFirebase } from "utils/uploadImgToFirebase";

export const extraReducersGetListEmployees = createAsyncThunk(
  "getListEmployees",
  async (params: EmployeeSearchParams) => {

    let is_used_happy_time = undefined;

    if (params.is_used_happy_time === StatusUsingHappyTime.Used) {
      is_used_happy_time = true
    }
    else if (params.is_used_happy_time === StatusUsingHappyTime.NotUsed) {
      is_used_happy_time = false
    }

    return api
      .post(`/api/agent/search?page=${params.page}&size=${params.size}`, { ...params, is_used_happy_time })
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
    let promise = new Promise((resolve, reject) => {
      if (typeof (dataUpdate.avatar) !== "string") {
        uploadImgToFirebase({
          id: dataUpdate.avatar.name,
          imageUpload: dataUpdate.avatar,
        })
          .then(url => resolve(url))
          .catch(err => reject(err))
      } else {
        resolve(dataUpdate.banner)
      }
    })
      .then(avatarUrl => api.put(`/api/agent/update/${id}`, { ...dataUpdate, avatar: avatarUrl }))
      .then((response: any) => ({
        payload: response.payload,
        message: response.message,
      }))
      .catch((error) => error)

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
    dataCreate._id = undefined;

    let promise = new Promise((resolve, reject) => {
      if (typeof (dataCreate.avatar) !== "string") {
        uploadImgToFirebase({
          id: dataCreate.avatar.name,
          imageUpload: dataCreate.avatar,
        })
          .then(url => resolve(url))
          .catch(err => reject(err))
      } else {
        resolve(dataCreate.banner)
      }
    })
      .then(avatarUrl => api.post(`/api/agent/create`, { ...dataCreate, avatar: avatarUrl }))
      .then((response: any) => ({
        payload: response.payload,
        message: response.message,
      }))
      .catch((error) => error)

    toastPromise(promise, {
      titleLoading: "Đang thực hiện",
      titleSuccess: "Tạo mới thành công",
      titleError: "Tạo mới thất bại",
    });
    return promise;
  }
);

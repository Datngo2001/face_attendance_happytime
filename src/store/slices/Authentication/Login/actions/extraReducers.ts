import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";

export const extraReducersLogin = createAsyncThunk(
  "login",
  async (data: any) => {
    const promise = api
      .post("/auth/login", data)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang đăng nhập...",
      titleSuccess: "Đăng nhập thành công",
      titleError: "Đăng nhập không thành công",
    });
    return promise;
  }
);

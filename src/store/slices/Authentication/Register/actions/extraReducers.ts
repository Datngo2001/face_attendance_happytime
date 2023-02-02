import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../../../config/api";
import { toastPromise } from "../../../../../utils";

export const extraReducersRegister = createAsyncThunk(
  "register",
  async (data) => {
    const promise = api
      .post("/auth/register", data)
      .then((response: any) => {
        console.log("response register", response);
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang đang ký...",
      titleSuccess: "Đăng ký thành công",
      titleError: "Đăng ký không thành công",
    });

    return promise;
  }
);

export const extraReducersCheckExists = createAsyncThunk(
  "checkExists",
  async (data) => {
    return api
      .post("/auth/validate", data)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);

export const extraReducersRequestOtp = createAsyncThunk(
  "requestOtp",
  async ({ dataRequest }: any) => {
    sessionStorage.setItem("phoneNumber", dataRequest.phone_number);
    const promise = api
      .post("/auth/send_otp", dataRequest)
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);

    toastPromise(promise, {
      titleLoading: "Đang yêu cầu OTP...",
      titleSuccess: "Đã yêu cầu OTP",
      titleError: "Yêu cầu OTP thất bại",
    });
    return promise;
  }
);

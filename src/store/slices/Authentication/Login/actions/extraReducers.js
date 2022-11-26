import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { api } from "../../../../../config/api";

export const extraReducersLogin = createAsyncThunk("login", async (data) => {
    const promise = api
        .post("/auth/login", data)
        .then((response) => {
            console.log("response", response);
            return {
                payload: response.payload,
                message: response.message,
            };
        })
        .catch((error) => error.data);

    toast.promise(promise, {
        loading: "Đang đăng nhập...",
        success: (data) => {
            if (data.message === "failed") {
                throw data;
            }
            return "Đăng nhập thành công";
        },
        error: (
            <b
                style={{
                    fontSize: "12px",
                    textAlign: "center",
                    color: "#212f3f",
                }}
            >
                Số điện thoại hoặc mật khẩu không chính xác
            </b>
        ),
    });
    return promise;
});

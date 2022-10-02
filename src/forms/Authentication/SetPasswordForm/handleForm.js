import * as yup from "yup";

export const schema = yup.object({
    password: yup
        .string()
        .required("Trường Mật khẩu không được bỏ trống")
        .min(6, "Mật khẩu cần ít nhất 6 ký tự"),
    confirmPassword: yup
        .string()
        .required("Trường Xác nhận mật khẩu không được bỏ trống")
        .min(6, "Mật khẩu cần ít nhất 6 ký tự")
        .oneOf([yup.ref("password"), null], "Mật khẩu xác nhận phải trùng với mật khẩu mới"),
});

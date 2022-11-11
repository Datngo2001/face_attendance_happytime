import * as yup from "yup";

export const schema = yup.object({
    oldPassword: yup.string().required("Trường Mật khẩu hiện tại không được bỏ trống"),
    newPassword: yup
        .string()
        .required("Trường Mật khẩu mới không được bỏ trống")
        .min(6, "Mật khẩu mới cần ít nhất 6 ký tự")
        .notOneOf(
            [yup.ref("oldPassword"), null],
            "Mật khẩu mới không được trùng với mật khẩu cũ"
        ),
    confirmNewPassword: yup
        .string()
        .required("Trường Xác nhận lại mật khẩu mới không được bỏ trống")
        .min(6, "Xác nhận lại mật khẩu mới cần ít nhất 6 ký tự")
        .oneOf(
            [yup.ref("newPassword"), null],
            "Mật khẩu xác nhận phải trùng với mật khẩu mới"
        ),
});

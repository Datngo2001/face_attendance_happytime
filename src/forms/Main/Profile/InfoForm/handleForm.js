import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required("Trường Họ và tên không được bỏ trống"),
    email: yup
        .string()
        .email("Thông tin sai định dạng")
        .max(100)
        .required("Trường Email không được bỏ trống"),
});

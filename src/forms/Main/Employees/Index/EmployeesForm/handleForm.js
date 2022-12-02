import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required("Trường Họ và tên không được bỏ trống"),
});

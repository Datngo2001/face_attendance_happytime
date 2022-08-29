import * as yup from "yup";

const REGEX_PHONE_NUMBER = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const REGEX_ONLY_NUMBER = /^\d+$/;

export const schema = yup.object({
    phone: yup
        .string()
        .required("Trường Nhập số điện thoại không được bỏ trống")
        .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
});

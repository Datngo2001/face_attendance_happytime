import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../regexConst";

export const schema = yup.object({
    phone: yup
        .string()
        .required("Trường Số điện thoại không được bỏ trống")
        .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
});

import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../regexConst";

export const schema = yup.object({
    username: yup
        .string()
        .required("Tên đăng nhập không được bỏ trống"),
    password: yup.string().required("Mật khẩu không được bỏ trống"),
});

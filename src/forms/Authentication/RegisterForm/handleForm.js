import * as yup from "yup";
import { checkSelectNull } from "../../functionValidate";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../regexConst";

export const schema = yup.object({
    phone: yup
        .string()
        .required("Trường Số điện thoại không được bỏ trống")
        .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
    name: yup.string().required("Trường Họ và tên không được bỏ trống"),
    nameCompany: yup.string().required("Trường Tên công ty không được bỏ trống"),
    nameCompanyShortHand: yup.string().required("Trường Tên viết tắt của công ty không được bỏ trống"),
    position: yup
        .string()
        .test("Check Select", "Trường Chức vụ không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
    email: yup
        .string()
        .email("Thông tin sai định dạng")
        .max(100)
        .required("Trường Email không được bỏ trống"),
    scale: yup
        .string()
        .test("Check Select", "Trường Quy mô công ty không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
    code: yup.string().nullable(),
});


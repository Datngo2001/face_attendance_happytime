import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../../../regexConst";

const checkSelectNull = (value) => {
    return value === "null" ? false : true;
};

export const schema = yup.object({
    companyName: yup.string().required("Trường Tên công ty không được bỏ trống"),
    companyHotline: yup
        .string()
        .nullable(),
        // .required("Trường Hotline công ty không được bỏ trống")
        // .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        // .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
    companyScale: yup
        .string()
        .test("Check Select", "Trường Quy mô công ty không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
});

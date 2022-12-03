import * as yup from "yup";
import { checkSelectNull } from "../../../../functionValidate";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../../../regexConst";

export const schema = yup.object({
    name: yup.string().required("Trường Họ và tên không được bỏ trống"),
    personalEmail: yup
        .string()
        .email("Thông tin sai định dạng")
        .max(100)
        .required("Trường Email không được bỏ trống"),
    phoneNumber: yup
        .string()
        .required("Trường Số điện thoại không được bỏ trống")
        .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
    typeEmployee: yup
        .string()
        .test("Check Select", "Trường Loại hình nhân sự không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
    startWorkingDate: yup
        .string()
        .required("Trường Ngày bắt đầu đi làm không được bỏ trống"),
});

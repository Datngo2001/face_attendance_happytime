import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "forms/regexConst";
import { checkSelectNull } from "forms/functionValidate";

export const schema = yup.object({
  name: yup.string().required("Trường Họ và tên không được bỏ trống"),
  personal_mail: yup
    .string()
    .email("Thông tin sai định dạng")
    .max(100)
    .required("Trường Email không được bỏ trống"),
  phone_number: yup
    .string()
    .required("Trường Số điện thoại không được bỏ trống")
    .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
    .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
  agent_type: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Trường Loại hình nhân sự không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  start_working_date: yup
    .number()
    .required("Trường Ngày bắt đầu đi làm không được bỏ trống"),
  education_type: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Trường Học vấn không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  married_status: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Trường Tình trạng hôn nhân không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),

  position_id: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Trường Phòng ban không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  agent_status: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Trường Trạng thái nhân sự không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
});

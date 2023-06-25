import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "forms/regexConst";
import { checkSelectNull } from "forms/functionValidate";

export const schema = yup.object({
  name: yup.string().required("Họ và tên không được bỏ trống"),
  personal_mail: yup
    .string()
    .email("Thông tin sai định dạng")
    .max(100)
    .required("Email không được bỏ trống"),
  phone_number: yup
    .string()
    .required("Số điện thoại không được bỏ trống")
    .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
    .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
  identify_id: yup
    .string()
    .nullable()
    .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng"),
  agent_type: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Loại hình nhân sự không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  start_working_date: yup
    .number()
    .required("Ngày bắt đầu đi làm không được bỏ trống"),
  education_type: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Học vấn không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  married_status: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Tình trạng hôn nhân không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),

  position_id: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Phòng ban không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  agent_status: yup
    .string()
    .nullable()
    .test(
      "Check Select",
      "Trạng thái nhân sự không được bỏ trống",
      (value) => {
        return checkSelectNull(value);
      }
    ),
  total_date_off: yup
    .number()
    .required("Ngày bắt đầu đi làm không được bỏ trống")
});

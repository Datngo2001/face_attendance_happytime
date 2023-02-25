import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Trường Tên ca làm việc không được bỏ trống"),
  code: yup.string().required("Trường Mã ca làm việc không được bỏ trống"),
  work_count: yup
    .string()
    .required("Trường Số công ghi nhận không được bỏ trống"),
  partial_work_count: yup
    .string()
    .required("Trường Số công ghi nhận nếu quên Check out không được bỏ trống"),
});

import * as yup from "yup";

export const schema = yup.object({
  department_name: yup.string().required("Không được bỏ trống"),
});

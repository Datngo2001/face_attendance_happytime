import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Không được bỏ trống"),
  department_parent_id: yup.string().required("Không được bỏ trống"),
});

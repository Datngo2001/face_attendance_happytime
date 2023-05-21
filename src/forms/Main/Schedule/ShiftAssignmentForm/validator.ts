import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Không được bỏ trống"),
  apply_for: yup.string().required("Không được bỏ trống"),
  departments: yup.array().required("Không được bỏ trống"),
});

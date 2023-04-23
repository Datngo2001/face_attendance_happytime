import * as yup from "yup";

export const schema = yup.object({
  ip_name: yup.string().required("Không được bỏ trống"),
  ip_address: yup.string().required("Không được bỏ trống"),
  is_active: yup.string().required("Không được bỏ trống"),
});

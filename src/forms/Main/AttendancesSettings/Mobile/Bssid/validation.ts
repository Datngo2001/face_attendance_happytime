import * as yup from "yup";

export const schema = yup.object({
  bssid_address: yup.string().required("Không được bỏ trống"),
  bssid_name: yup.string().required("Không được bỏ trống"),
});

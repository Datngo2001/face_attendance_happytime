import * as yup from "yup";

export const schema = yup.object({
    workspaceName: yup.string().required("Trường Tên workspace không được bỏ trống"),
});

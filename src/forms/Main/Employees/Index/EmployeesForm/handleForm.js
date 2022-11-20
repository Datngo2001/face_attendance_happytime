import * as yup from "yup";

export const schema = yup.object({
    citizenId: yup.string(),
    name: yup.string().required("Trường Họ và tên không được bỏ trống"),
    graduationDate: yup
        .string()
        .required("Trường Ngày bắt đầu đi làm không được bỏ trống"),
});

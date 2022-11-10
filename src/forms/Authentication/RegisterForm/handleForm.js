import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../regexConst";

const checkSelectNull = (value) => {
    return value === "null" ? false : true;
};

export const schema = yup.object({
    phone: yup
        .string()
        .required("Trường Số điện thoại không được bỏ trống")
        .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
    name: yup.string().required("Trường Họ và tên không được bỏ trống"),
    nameCompany: yup.string().required("Trường Tên công ty không được bỏ trống"),
    position: yup
        .string()
        .test("Check Select", "Trường Chức vụ không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
    email: yup
        .string()
        .email("Thông tin sai định dạng")
        .max(100)
        .required("Trường Email không được bỏ trống"),
    scale: yup
        .string()
        .test("Check Select", "Trường Quy mô công ty không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
    code: yup.string().nullable(),
});

export const listPositions = [
    {
        id: 0,
        name: "CEO/ Founder/ Chủ tịch",
    },
    {
        id: 1,
        name: "Giám đốc (CFO, CTO, HRM, VP)",
    },
    { id: 2, name: "Quản lý" },
    { id: 3, name: "Nhân viên" },
    { id: 4, name: "Vị trí khác" },
];

export const listScales = [
    {
        id: 0,
        name: "1 - 9 nhân viên",
    },
    {
        id: 1,
        name: "10 - 24 nhân viên",
    },
    {
        id: 2,
        name: "25 - 99 nhân viên",
    },
    {
        id: 3,
        name: "100 - 499 nhân viên",
    },
    {
        id: 4,
        name: "500 - 1000 nhân viên",
    },
    {
        id: 5,
        name: "1000+ nhân viên",
    },
    {
        id: 6,
        name: "5000+ nhân viên",
    },
    {
        id: 7,
        name: "10000+ nhân viên",
    },
];

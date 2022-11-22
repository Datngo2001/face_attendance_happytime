import * as yup from "yup";
import { REGEX_ONLY_NUMBER, REGEX_PHONE_NUMBER } from "../../../../regexConst";

const checkSelectNull = (value) => {
    return value === "null" ? false : true;
};

export const schema = yup.object({
    companyName: yup.string().required("Trường Tên công ty không được bỏ trống"),
    companyHotline: yup
        .string()
        .required("Trường Hotline công ty không được bỏ trống")
        .matches(REGEX_ONLY_NUMBER, "Thông tin sai định dạng")
        .matches(REGEX_PHONE_NUMBER, "Thông tin sai định dạng"),
    companyScale: yup
        .string()
        .test("Check Select", "Trường Quy mô công ty không được bỏ trống", (value) => {
            return checkSelectNull(value);
        }),
});

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

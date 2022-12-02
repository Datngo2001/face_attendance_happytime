import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import ButtonCustom from "../../../components/ButtonCustom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HailIcon from "@mui/icons-material/Hail";
import KeyIcon from "@mui/icons-material/Key";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { schema } from "./handleForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { focusToElement } from "../../../utils";
import SelectCustom from "../../../components/SelectCustom";
import { useSelector } from "react-redux";
import { api } from "../../../config/api";
import FormatShapesRoundedIcon from "@mui/icons-material/FormatShapesRounded";
import { listPositions, listScales } from "../../../utils/ListData";

const RegisterForm = () => {
    // VARIABLES
    const navigate = useNavigate();

    // ************************************************************

    // STATE
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
    const [disabled, setDisabled] = useState(true);
    // ************************************************************

    // HOOK REACT TOOLKIT
    const { loading } = useSelector((state) => state.auth);
    // ****************************

    // EFFECT
    useEffect(() => {
        const formRegister = document.querySelector(".register-form__wrapper");
        formRegister.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                document.querySelector(".btn-register").click();
            }
        });

        focusToElement("phone");

        // CLEAN FUNCTION
        return () => {
            formRegister.removeEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    document.querySelector(".btn-register").click();
                }
            });
        };
    }, []);
    // **************************************************************

    // ARROW FUNCTION
    const onSubmit = async (data) => {
        console.log("data register:", data);

        sessionStorage.setItem("dataRegister", JSON.stringify(data));
        const isExistPhone = await api
            .post("/auth/validate", {
                phone_number: data.phone,
            })
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        const isExistEmail = await api
            .post("/auth/validate", {
                email: data.email,
            })
            .then((response) => {
                return {
                    payload: response.payload,
                    message: response.message,
                };
            })
            .catch((error) => error);

        if (isExistPhone.payload) {
            setError("phone", {
                type: "custom",
                message: "Số điện thoại đã được sử dụng",
            });
        }
        if (isExistEmail.payload) {
            setError("email", {
                type: "custom",
                message: "Email đã được sử dụng",
            });
        }

        if (!isExistPhone.payload && !isExistEmail.payload) {
            navigate("/auth/set-password");
        }
        console.log("isExistPhone", isExistPhone);
    };
    // **************************************************************

    console.log("loading", loading);
    return (
        <>
            <form action="" className="register-form__wrapper">
                <div className="register-form__header">
                    <Link className="tag-redirect" to="../login">
                        <KeyboardBackspaceIcon />
                        Quay lại
                    </Link>
                    <h2 className="register-form__title">Đăng ký</h2>
                </div>
                <InputCustom
                    id="phone"
                    className="input-item"
                    type="tel"
                    placeholder="Nhập số điện thoại *"
                    register={register}
                    iconLeft={<LocalPhoneRoundedIcon />}
                    message={errors}
                />
                <InputCustom
                    id="name"
                    className="input-item"
                    type="text"
                    placeholder="Nhập họ và tên *"
                    register={register}
                    iconLeft={<AccountCircleSharpIcon />}
                    message={errors}
                />
                <InputCustom
                    id="nameCompany"
                    className="input-item"
                    type="text"
                    placeholder="Nhập tên công ty *"
                    register={register}
                    iconLeft={<ApartmentIcon />}
                    message={errors}
                />
                <InputCustom
                    id="nameCompanyShortHand"
                    className="input-item"
                    type="text"
                    placeholder="Nhập tên viết tắt của công ty *"
                    register={register}
                    iconLeft={<FormatShapesRoundedIcon />}
                    message={errors}
                />
                <SelectCustom
                    id="position"
                    className="input-item"
                    width="100%"
                    placeholder="Chức vụ *"
                    register={register}
                    icon={<HailIcon />}
                    options={listPositions}
                    message={errors}
                />
                <InputCustom
                    id="email"
                    className="input-item"
                    type="email"
                    placeholder="Nhập email *"
                    register={register}
                    iconLeft={<EmailIcon />}
                    message={errors}
                />
                <SelectCustom
                    id="scale"
                    className="input-item"
                    width="100%"
                    placeholder="Quy mô công ty *"
                    register={register}
                    icon={<SupervisorAccountIcon />}
                    options={listScales}
                    message={errors}
                />
                <InputCustom
                    id="code"
                    className="input-item"
                    type="text"
                    placeholder="Nhập mã giới thiệu"
                    register={register}
                    iconLeft={<KeyIcon />}
                    message={errors}
                />
                <div className="policies">
                    <input
                        onClick={() => setDisabled(!disabled)}
                        id="agree"
                        type="checkbox"
                        width="16px"
                        height="16px"
                    />
                    Đồng ý với{" "}
                    <a
                        href="https://www.happytimeapp.vn/dieu-khoan-su-dung"
                        alt=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Điều khoản
                    </a>
                    và
                    <a
                        href="https://www.happytimeapp.vn/chinh-sach-bao-mat"
                        alt=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        Chính sách
                    </a>
                    của HappyTime
                </div>
                <div style={{ marginTop: "40px", marginBottom: "24px" }}>
                    <ButtonCustom
                        className="btn-register"
                        height="48px"
                        disabled={disabled}
                        onClick={handleSubmit(onSubmit)}
                    >
                        ĐĂNG KÝ
                    </ButtonCustom>
                </div>
                <p className="tag-redirect">
                    Bạn đã có tài khoản? <Link to="../login">Đăng nhập</Link>
                </p>
            </form>
        </>
    );
};

export default RegisterForm;

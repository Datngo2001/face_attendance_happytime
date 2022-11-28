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
import { listPositions, listScales, schema } from "./handleForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { focusToElement } from "../../../utils";
import SelectCustom from "../../../components/SelectCustom";

const RegisterForm = () => {
    // VARIABLES
    const navigate = useNavigate();

    // ************************************************************

    // STATE
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const [disabled, setDisabled] = useState(true);
    // ************************************************************

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
    const onSubmit = (data) => {
        console.log("data register:", data);
        sessionStorage.setItem("dataRegister", JSON.stringify(data));
        navigate("/auth/set-password");
    };
    // **************************************************************

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

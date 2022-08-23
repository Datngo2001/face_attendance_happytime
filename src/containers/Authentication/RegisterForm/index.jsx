import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import ButtonCustom from "../../../components/ButtonCustom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import BadgeIcon from "@mui/icons-material/Badge";
import KeyIcon from "@mui/icons-material/Key";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { Link } from "react-router-dom";
import { useState } from "react";
import SelectCustom from "../../../components/SelectCustom";

const listPositions = [
    {
        id: 1,
        name: "CEO/ Founder/ Chủ tịch",
    },
    {
        id: 2,
        name: "Giám đốc (CFO, CTO, HRM, VP)",
    },
];

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [disabled, setDisabled] = useState(true);

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
                    icon={<LocalPhoneRoundedIcon />}
                >
                    {errors?.phone?.message}
                </InputCustom>
                <InputCustom
                    id="name"
                    className="input-item"
                    type="text"
                    placeholder="Nhập họ và tên *"
                    register={register}
                    icon={<AccountCircleSharpIcon />}
                >
                    {errors.name?.message}
                </InputCustom>
                <InputCustom
                    id="nameCompany"
                    className="input-item"
                    type="text"
                    placeholder="Nhập tên công ty *"
                    register={register}
                    icon={<ApartmentIcon />}
                >
                    {errors.nameCompany?.message}
                </InputCustom>
                <SelectCustom
                    id="position"
                    className="input-item"
                    placeholder="Chức vụ *"
                    register={register}
                    icon={<BadgeIcon />}
                    options={listPositions}
                >
                    {errors.position?.message}
                </SelectCustom>
                <InputCustom
                    id="email"
                    className="input-item"
                    type="email"
                    placeholder="Nhập email *"
                    register={register}
                    icon={<EmailIcon />}
                >
                    {errors.password?.message}
                </InputCustom>
                <SelectCustom
                    id="scale"
                    className="input-item"
                    placeholder="Quy mô công ty *"
                    register={register}
                    icon={<SupervisorAccountIcon />}
                    options={listPositions}
                >
                    {errors.scale?.message}
                </SelectCustom>
                <InputCustom
                    id="code"
                    className="input-item"
                    type="text"
                    placeholder="Nhập mã giới thiệu"
                    register={register}
                    icon={<KeyIcon />}
                >
                    {errors?.code?.message}
                </InputCustom>
                <div className="policies">
                    <input
                        onClick={() => setDisabled(!disabled)}
                        id="agree"
                        type="checkbox"
                        width="16px"
                        height="16px"
                    />
                    Đồng ý với{" "}
                    <a href="https://www.happytimeapp.vn/dieu-khoan-su-dung" target="_blank">
                        Điều khoản
                    </a>
                    và
                    <a href="https://www.happytimeapp.vn/chinh-sach-bao-mat" target="_blank">
                        Chính sách
                    </a>
                    của HappyTime
                </div>
                <div style={{ marginTop: "40px", marginBottom: "24px" }}>
                    <ButtonCustom height="48px" disabled={disabled}>
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

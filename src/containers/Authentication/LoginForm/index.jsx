import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <>
            <form action="" className="login-form__wrapper">
                <h2 className="login-form__title">Đăng nhập</h2>
                <InputCustom
                    id="phone"
                    className="input-phone"
                    type="tel"
                    placeholder="Nhập số điện thoại *"
                    register={register}
                    icon={<LocalPhoneRoundedIcon />}
                >
                    {errors?.phone?.message}
                </InputCustom>
                <InputCustom
                    id="password"
                    className="input-password"
                    type="password"
                    placeholder="Nhập mật khẩu *"
                    register={register}
                    icon={<LockIcon />}
                >
                    {errors?.password?.message}
                </InputCustom>
                <Link className="forgot-password" to="/forgot-password">Quên mật khẩu?</Link>
            </form>
        </>
    );
};

export default LoginForm;

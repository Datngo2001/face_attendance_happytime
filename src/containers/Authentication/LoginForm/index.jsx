import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import ButtonCustom from "../../../components/ButtonCustom";
import Footer from "../../../components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        console.log("data", data);
    };
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
                <Link className="forgot-password" to="/auth/forgot-password">
                    Quên mật khẩu?
                </Link>
                <div style={{ marginTop: "40px", marginBottom: "60px" }}>
                    <ButtonCustom height="48px" onClick={handleSubmit(onSubmit)}>
                        ĐĂNG NHẬP
                    </ButtonCustom>
                </div>
                <p className="tag-redirect">
                    Bạn chưa có tài khoản? <Link to="/auth/register">Đăng ký ngay?</Link>
                </p>
            </form>
            <Footer type="2" />
        </>
    );
};

export default LoginForm;

import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import ButtonCustom from "../../../components/ButtonCustom";
import Footer from "../../../components/Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";
import { useEffect } from "react";

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("data", data);

        navigate("/workspaces");
    };

    useEffect(() => {
        const formLogin = document.querySelector(".login-form__wrapper");
        formLogin.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                document.querySelector(".btn-login").click();
            }
        });

        // CLEAN FUNCTION
        return () => {
            formLogin.removeEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    document.querySelector(".btn-login").click();
                }
            });
        };
    }, []);
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
                    message={errors}
                />
                <InputCustom
                    id="password"
                    className="input-password"
                    type="password"
                    placeholder="Nhập mật khẩu *"
                    register={register}
                    icon={<LockIcon />}
                    message={errors}
                />
                <div className="tag-redirect text-right">
                    <Link className="tag" to="/auth/forgot-password">
                        Quên mật khẩu?
                    </Link>
                </div>
                <div style={{ marginTop: "40px", marginBottom: "60px" }}>
                    <ButtonCustom
                        className="btn-login"
                        height="48px"
                        onClick={handleSubmit(onSubmit)}
                    >
                        ĐĂNG NHẬP
                    </ButtonCustom>
                </div>
                <div className="tag-redirect">
                    Bạn chưa có tài khoản?
                    <Link className="tag" to="/auth/register">
                        {" "}
                        Đăng ký ngay?
                    </Link>
                </div>
            </form>
            <Footer type="2" />
        </>
    );
};

export default LoginForm;

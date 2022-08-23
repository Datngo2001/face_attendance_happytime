import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";
import ButtonCustom from "../../../components/ButtonCustom";

const ForgotPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <>
            <form action="" className="forgot-password-form__wrapper">
                <Link className="tag-redirect" to="../login">
                    <KeyboardBackspaceIcon />
                    Quay lại
                </Link>
                <h2 className="forgot-password-form__title">Quên mật khẩu</h2>
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
                <div style={{marginTop: "40px"}}>
                    <ButtonCustom height="48px">GỬI MÃ XÁC NHẬN</ButtonCustom>
                </div>
            </form>
            <Footer type="2" />
        </>
    );
};

export default ForgotPasswordForm;

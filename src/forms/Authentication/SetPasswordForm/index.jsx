import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { schema } from "./handleForm";
import InputCustom from "../../../components/InputCustom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import ButtonCustom from "../../../components/ButtonCustom";
import LockIcon from "@mui/icons-material/Lock";

const SetPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log("data", data);
    };

    return (
        <>
            <form className="set-password-form__wrapper">
                <div className="set-password-form__header">
                    <Link className="tag-redirect" to="../login">
                        <KeyboardBackspaceIcon />
                        Quay lại
                    </Link>
                    <h2 className="set-password-form__title">Thiết lập mật khẩu</h2>
                </div>
                <div className="set-password-form__container">
                    <InputCustom
                        id="password"
                        className="input-item"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        icon={<LockIcon />}
                        register={register}
                    >
                        {errors.password?.message}
                    </InputCustom>
                    <InputCustom
                        id="confirmPassword"
                        className="input-item"
                        placeholder="Xác nhận mật khẩu"
                        type="password"
                        icon={<LockIcon />}
                        register={register}
                    >
                        {errors.confirmPassword?.message}
                    </InputCustom>
                </div>
                <div style={{ marginTop: "40px" }}>
                    <ButtonCustom onClick={handleSubmit(onSubmit)} height="48px">
                        Lưu
                    </ButtonCustom>
                </div>
            </form>
        </>
    );
};

export default SetPasswordForm;

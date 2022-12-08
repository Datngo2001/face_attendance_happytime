import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.scss";
import { InputCode } from "./components";
import ButtonCustom from "../../../components/ButtonCustom";
import { schema } from "./handleForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { focusToElement, toastify } from "../../../utils";
import { useEffect } from "react";

const ConfirmOTPForm = () => {
    // STATE
    const navigate = useNavigate();
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        focusToElement("1");
    }, []);
    // ****************************

    // ARROW FUNCTIONS
    const onSubmit = (data) => {
        const convertedArray = Object.entries(data);
        let otpInput = "";
        for (let i = 0; i < 6; i++) {
            otpInput += convertedArray[i][1];
        }
        console.log("otpInput", otpInput);
        if (otpInput === sessionStorage.getItem("otp")) {
            sessionStorage.removeItem("otp");
            sessionStorage.removeItem("phoneNumber");
            navigate("/auth/set-password", { replace: true });
        } else {
            toastify({
                mess: "Mã OTP không đúng",
                type: "error",
            });
        }
    };
    // ****************************

    return (
        <>
            <form action="" className="confirm-otp-form__wrapper">
                <div className="confirm-otp-form__header">
                    <Link className="tag-redirect" to="../register">
                        <KeyboardBackspaceIcon />
                        Quay lại
                    </Link>
                    <h2 className="confirm-otp-form__title">Nhập mã xác thực</h2>
                </div>
                <p className="confirm-otp-form__text">
                    Mã xác thực vừa được gửi về số điện thoại{" "}
                    <span className="confirm-otp-form__text-phone">
                        {sessionStorage.getItem("phoneNumber")}
                    </span>
                    . Vui lòng nhập mã để xác thực tài khoản HappyTime
                </p>
                <div className="confirm-otp-form__input-code">
                    <InputCode id="1" register={register} />
                    <InputCode id="2" register={register} />
                    <InputCode id="3" register={register} />
                    <InputCode id="4" register={register} />
                    <InputCode id="5" register={register} />
                    <InputCode id="6" register={register} />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <ButtonCustom onClick={handleSubmit(onSubmit)} height="48px">
                        XÁC NHẬN
                    </ButtonCustom>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{ color: "#777777", fontSize: "14px" }}>
                        Bạn chưa nhận được mã xác thực?
                    </p>
                    <p className="resend-code-tag">Gửi lại mã xác thực</p>
                </div>
            </form>
        </>
    );
};

export default ConfirmOTPForm;

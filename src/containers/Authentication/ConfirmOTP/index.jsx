import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import "./styles.scss";
import { tabTitle } from "../../../utils/tabTitle";
import { InputCode } from "./components";
import ButtonCustom from "../../../components/ButtonCustom";

const ConfirmOtp = () => {
    tabTitle("Xác thực");
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
                    <span className="confirm-otp-form__text-phone">0964088473</span>. Vui lòng nhập
                    mã để xác thực tài khoản HappyTime
                </p>
                <div className="confirm-otp-form__input-code">
                    <InputCode />
                    <InputCode />
                    <InputCode />
                    <InputCode />
                    <InputCode />
                    <InputCode />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <ButtonCustom height="48px">XÁC NHẬN</ButtonCustom>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={{color: "#777777", fontSize: "14px"}}>Bạn chưa nhận được mã xác thực?</p>
                    <p className="resend-code-tag">Gửi lại mã xác thực</p>
                </div>
            </form>
        </>
    );
};

export default ConfirmOtp;

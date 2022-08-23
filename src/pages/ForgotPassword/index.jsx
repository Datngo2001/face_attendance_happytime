import "./styles.scss";
import { tabTitle } from "../../utils/tabTitle";
import ForgotPasswordForm from "../../containers/Authentication/ForgotPasswordForm";

const ForgotPassword = () => {
    tabTitle("Quên mật khẩu");

    return (
        <>
            <ForgotPasswordForm />
        </>
    );
};

export  default ForgotPassword;
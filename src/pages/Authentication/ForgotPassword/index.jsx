import "./styles.scss";
import ForgotPasswordForm from "../../../forms/Authentication/ForgotPasswordForm";
import tabTitle from "../../../utils/tabTitle";

const ForgotPassword = () => {
    tabTitle("Quên mật khẩu");

    return (
        <>
            <ForgotPasswordForm />
        </>
    );
};

export  default ForgotPassword;
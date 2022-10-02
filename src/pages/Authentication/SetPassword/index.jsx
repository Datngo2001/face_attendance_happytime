import SetPasswordForm from "../../../forms/Authentication/SetPasswordForm";
import tabTitle from "../../../utils/tabTitle";
import "./styles.scss";

const SetPassword = () => {
    tabTitle("Đặt mật khẩu");

    return (
        <>
            <SetPasswordForm />
        </>
    );
};

export default SetPassword;

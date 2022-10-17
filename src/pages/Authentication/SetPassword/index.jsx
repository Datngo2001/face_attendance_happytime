import SetPasswordForm from "../../../forms/Authentication/SetPasswordForm";
import { tabTitle } from "../../../utils";
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

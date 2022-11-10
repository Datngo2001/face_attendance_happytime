import "./styles.scss";
import { tabTitle } from "../../../utils";
import ConfirmOTPForm from "../../../forms/Authentication/ConfirmOTPForm";

const ConfirmOTP = () => {
    tabTitle("Xác thực");

    return (
        <>
            <ConfirmOTPForm />
        </>
    );
};

export default ConfirmOTP;

import "./styles.scss";
import RegisterForm from "../../../forms/Authentication/RegisterForm";
import { tabTitle } from "../../../utils";

const Register = () => {
    tabTitle("Đăng ký");

    return (
        <>
            <RegisterForm />
        </>
    );
};

export default Register;

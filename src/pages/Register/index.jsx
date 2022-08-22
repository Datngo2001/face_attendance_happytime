import "./styles.scss";
import { tabTitle } from "../../utils/tabTitle";
import RegisterForm from "../../containers/Authentication/RegisterForm";

const Register = () => {
    tabTitle("Đăng ký");

    return (
        <>
            <RegisterForm />
        </>
    );
};

export  default Register;
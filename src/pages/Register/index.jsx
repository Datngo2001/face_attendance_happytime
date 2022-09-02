import "./styles.scss";
import RegisterForm from "../../containers/Authentication/RegisterForm";
import tabTitle from "../../utils/tabTitle";

const Register = () => {
    tabTitle("Đăng ký");

    return (
        <>
            <RegisterForm />
        </>
    );
};

export  default Register;
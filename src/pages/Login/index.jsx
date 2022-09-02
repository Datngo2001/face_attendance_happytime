import "./styles.scss";
import LoginForm from "../../containers/Authentication/LoginForm";
import tabTitle from "../../utils/tabTitle";

const Login = () => {
    tabTitle("Đăng nhập");

    return (
        <>
            <LoginForm />
        </>
    );
};

export  default Login;
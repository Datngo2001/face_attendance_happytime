import "./styles.scss";
import { tabTitle } from "../../utils/tabTitle";
import LoginForm from "../../containers/Authentication/LoginForm";

const Login = () => {
    tabTitle("Đăng nhập");

    return (
        <>
            <LoginForm />
        </>
    );
};

export  default Login;
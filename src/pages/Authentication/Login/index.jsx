import "./styles.scss";
import LoginForm from "../../../forms/Authentication/LoginForm";
import { tabTitle } from "../../../utils";

const Login = () => {
    tabTitle("Đăng nhập");
    return (
        <>
            <LoginForm />
        </>
    );
};

export default Login;

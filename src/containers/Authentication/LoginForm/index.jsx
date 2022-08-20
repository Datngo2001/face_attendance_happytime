import { tabTitle } from "../../../utils/tabTitle";
import "./styles.scss";

const LoginForm = () => {
    tabTitle("Đăng nhập");

    return (
        <>
            <form action="" className="login-form__wrapper">
                <h2 className="login-form__title">Đăng nhập</h2>
            </form>
        </>
    );
};

export default LoginForm;

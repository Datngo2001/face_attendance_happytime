import ConfirmOtp from "../../../forms/Authentication/ConfirmOTPForm";
import LoginForm from "../../../forms/Authentication/LoginForm";
import ForgotPassword from "../../../pages/Authentication/ForgotPassword";
import Register from "../../../pages/Authentication/Register";
import SetPassword from "../../../pages/Authentication/SetPassword";

const authenticationRouters = [
    {
        path: "login",
        component: <LoginForm />,
    },
    {
        path: "register",
        component: <Register />,
    },
    {
        path: "forgot-password",
        component: <ForgotPassword />,
    },
    {
        path: "confirm-otp",
        component: <ConfirmOtp />,
    },
    {
        path: "set-password",
        component: <SetPassword />,
    },
];

export default authenticationRouters;

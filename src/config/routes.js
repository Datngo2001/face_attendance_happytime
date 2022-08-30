import ConfirmOtp from "../containers/Authentication/ConfirmOTP";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";

// authentication router
export const authenticationRouters = [
    {
        path: "login",
        Component: Login,
    },
    {
        path: "register",
        Component: Register,
    },
    {
        path: "forgot-password",
        Component: ForgotPassword,
    },
    {
        path: "confirm-otp",
        Component: ConfirmOtp,
    }
];

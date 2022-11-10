import {
    ConfirmOTP,
    ForgotPassword,
    Login,
    Register,
    SetPassword,
} from "../../../pages/Authentication";

const authenticationRouters = [
    {
        path: "login",
        component: <Login />,
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
        component: <ConfirmOTP />,
    },
    {
        path: "set-password",
        component: <SetPassword />,
    },
];

export default authenticationRouters;

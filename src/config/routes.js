import ConfirmOtp from "../containers/Authentication/ConfirmOTPForm";
import LoginForm from "../containers/Authentication/LoginForm";
import ForgotPassword from "../pages/Authentication/ForgotPassword";
import Register from "../pages/Authentication/Register";
import SetPassword from "../pages/Authentication/SetPassword";
import CreateWorkspaces from "../pages/Workspaces/CreateWorkspaces";

// home router
export const homeRouters = [
    {
        path: "tinh-nang",
        Component: "",
    },
    {
        path: "bao-gia",
        Component: "",
    },
    {
        path: "bao-gia",
        Component: "",
    },
    {
        path: "blog",
        Component: "",
    },
    {
        path: "danh-cho-nguoi-su-dung-app",
        Component: "",
    },
];

// authentication router
export const authenticationRouters = [
    {
        path: "login",
        Component: LoginForm,
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
    },
    {
        path: "set-password",
        Component: SetPassword,
    },
];

// workspaces router
export const workspacesRouters = [
    {
        path: "create",
        Component: CreateWorkspaces,
    },
];

import ConfirmOtp from "../containers/Authentication/ConfirmOTP";
import ForgotPassword from "../pages/ForgotPassword";
import Login from "../pages/Login";
import Register from "../pages/Register";
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
    },
];

// workspaces router
export const workspacesRouters = [
    {
        path: "create",
        Component: CreateWorkspaces,
    },
];

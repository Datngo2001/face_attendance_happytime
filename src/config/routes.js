import LoginForm from "../containers/Authentication/LoginForm";
import AuthenticationLayout from "../layouts/Authentication";

// authentication router
export const authenticationRouters = [
    {
        path: "login",
        Component: LoginForm,
    },
];

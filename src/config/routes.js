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
];

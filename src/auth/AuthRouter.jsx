import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as auth from "../auth/index";

export const AuthRouter = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const url = location.pathname;
        if (url === "/auth" || url === "/auth/") {
            navigate("../auth/login", { replace: true });
        }

        if (!auth.authAccount()) {
            if (url.includes("/app")) {
                navigate("../auth/login");
            }
        }
    }, [location.pathname]);
    return <>{children}</>;
};

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthRouter = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const url = location.pathname;
        if (url === "/auth" || url === "/auth/") {
            navigate("../auth/login", { replace: true });   
        }
    }, [location.pathname]);
    return <>{children}</>;
};

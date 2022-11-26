import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Redirect = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location", location.pathname);

    useEffect(() => {
        switch (location.pathname) {
            case "/auth":
                navigate("/auth/login");
                break;
            default:
        }
    }, [location.pathname]);

    return <>{children}</>;
};

export const NoMatch = () => {
    return (
        <>
            <div>No match</div>
        </>
    );
};

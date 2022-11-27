import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NoMatchRouter = () => {
    // HOOK ROUTER DOM
    const location = useLocation();
    const navigate = useNavigate();
    // ****************************
    useEffect(() => {
        navigate(-1);
    }, [location.pathname]);
    return <></>;
};

export default NoMatchRouter;

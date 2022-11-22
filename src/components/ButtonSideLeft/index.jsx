import { Link, useLocation } from "react-router-dom";
import "./styles.scss";
import "./responsive.scss";

const ButtonSideLeft = ({ title, icon, path }) => {
    // VARIABLES
    const location = useLocation();
    // ******************************

    // ARROW FUNCTION
    // ******************************

    // CATCH ERROR
    path || console.warn("Missing path!");
    // ******************************

    return (
        <>
            <Link
                to={path}
                className={`button-side-left__wrapper ${
                    location.pathname.includes(path) ? "active" : ""
                }`}
            >
                <span className="icon">{icon || "Missing icon"}</span>
                <p className="title">{title || "Missing title"}</p>
            </Link>
        </>
    );
};

export default ButtonSideLeft;

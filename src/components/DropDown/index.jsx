import { useEffect } from "react";
import "./styles.scss";

const DropDown = ({
    children,
    state,
    setState,
    height,
    width,
    top,
    left,
    right,
    bottom,
}) => {
    // VARIABLES
    // ********************************
    // STATE
    // ********************************

    // HOOK
    // ****************************************************************

    // ARROW FUNCTION
    const handleOnClick = (e) => {
        setState(false);
    };
    // ****************************************************************

    console.log("re-render");
    return (
        <>
            <div
                className={`drop-down__container ${state && "show"}`}
                onClick={handleOnClick}
            ></div>
            <div
                style={{
                    height: height,
                    width: width,
                    top: top,
                    left: left,
                    right: right,
                    bottom: bottom,
                }}
                className={`drop-down__wrapper ${state && "show"}`}
                onClick={handleOnClick}
            >
                {children}
            </div>
        </>
    );
};

export default DropDown;

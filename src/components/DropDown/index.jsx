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
    // HOOK EFFECT
    // ****************************************************************

    // ARROW FUNCTION
    const handleOnClick = () => {
        setState(false);
    };
    // ****************************************************************

    return (
        <>
            <div className="drop-down__container">
                <div
                    className={`drop-down__cover ${state && "show"}`}
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
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export default DropDown;

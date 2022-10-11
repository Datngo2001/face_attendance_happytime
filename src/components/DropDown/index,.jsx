import "./styles.scss";

const DropDown = ({ children, state, setState }) => {
    // VARIABLES
    // ********************************
    // STATE
    // ********************************
    const handleOnClick = (e) => {
        setState(false);
    };
    return (
        <>
            <div
                className={`drop-down__container ${state && "show"}`}
                onClick={handleOnClick}
            ></div>
            <div className={`drop-down__wrapper ${state && "show"}`}>{children}</div>
        </>
    );
};

export default DropDown;

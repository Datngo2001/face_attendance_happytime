import "./styles.scss";

const DropDown = ({ children, state }) => {
    return (
        <>
            <div className={`drop-down__wrapper ${state && "show"}`}>{children}</div>
        </>
    );
};

export default DropDown;

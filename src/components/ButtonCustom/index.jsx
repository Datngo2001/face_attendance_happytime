import "./styles.scss";

const ButtonCustom = ({
    icon,
    type = 1,
    height,
    width,
    onClick,
    children,
    className,
    disabled,
}) => {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled || false}
                className={`btn-custom ${disabled ? "disabled" : ""} ${
                    className ? className : ""
                } ${type !== 1 ? "type-2" : "type-1"}`}
                style={{ height: height ? height : "", width: width ? width : "" }}
            >
                {icon}
                {children}
            </button>
        </>
    );
};

export default ButtonCustom;

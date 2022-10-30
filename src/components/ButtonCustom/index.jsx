import "./styles.scss";

const ButtonCustom = ({
    icon,
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
                }`}
                style={{ height: height ? height : "", width: width ? width : "" }}
            >
                {icon}
                {children}
            </button>
        </>
    );
};

export default ButtonCustom;

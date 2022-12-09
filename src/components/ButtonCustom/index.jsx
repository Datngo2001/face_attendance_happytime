import "./styles.scss";

const ButtonCustom = ({
    id,
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
                id={id}
                onClick={onClick}
                disabled={disabled || false}
                className={`btn-custom ${disabled ? "disabled" : ""} ${
                    className ? className : ""
                } ${type === 1 ? "type-1" : ""} ${type === 2 ? "type-2" : ""} ${
                    type === 3 ? "type-3" : ""
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

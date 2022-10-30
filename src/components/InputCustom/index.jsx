import "./styles.scss";

const InputCustom = ({
    id,
    icon,
    placeholder,
    width,
    height,
    register,
    className,
    type,
    message = undefined,
}) => {
    return (
        <>
            <div
                className={`input-custom__wrapper ${
                    message && message[id] ? "error" : ""
                } ${className ? className : ""} ${!icon && "none-icon"}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {icon}
                <input id={id} placeholder={placeholder} type={type} {...register(id)} />
                {!(message === undefined) && (
                    <p className="error-message">{message[id]?.message}</p>
                )}
            </div>
        </>
    );
};

export default InputCustom;

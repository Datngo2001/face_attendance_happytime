import "./styles.scss";

const InputCustom = ({
    id,
    iconRight,
    iconLeft,
    placeholder,
    width,
    height,
    register,
    className,
    type,
    message,
    label,
    required = false,
    direction,
    labelWidth,
}) => {
    return (
        <>
            <div
                className={`input-custom__wrapper direction-${direction}
            ${className ? className : ""}`}
            >
                {label && (
                    <div
                        className={`label ${required && "required"}`}
                        style={{ width: labelWidth }}
                    >
                        <label htmlFor={id}>
                            {label}
                            <span> *</span>
                        </label>
                    </div>
                )}
                <div
                    className={`container ${message && message[id] ? "error" : ""}  ${
                        !iconLeft && !iconRight && "none-icon"
                    } ${iconRight && "icon-right"} ${iconLeft && "icon-left"}`}
                    style={{ width: width ? width : "", height: height ? height : "" }}
                >
                    {iconLeft}
                    <input
                        id={id}
                        placeholder={placeholder}
                        type={type}
                        {...register(id)}
                    />
                    {iconRight}
                    {message && <p className="error-message">{message[id]?.message}</p>}
                </div>
            </div>
        </>
    );
};

export default InputCustom;

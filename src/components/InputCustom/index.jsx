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
    message = undefined,
}) => {
    return (
        <>
            <div
                className={`input-custom__wrapper ${
                    message && message[id] ? "error" : ""
                } ${className ? className : ""} ${
                    !iconLeft && !iconRight && "none-icon"
                } ${iconRight && "icon-right"} ${iconLeft && "icon-left"}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {iconLeft}
                <input id={id} placeholder={placeholder} type={type} {...register(id)} />
                {iconRight}
                {!(message === undefined) && (
                    <p className="error-message">{message[id]?.message}</p>
                )}
            </div>
        </>
    );
};

export default InputCustom;

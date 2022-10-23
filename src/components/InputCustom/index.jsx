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
    message,
}) => {
    return (
        <>
            <div
                className={`input-custom__wrapper ${message[id] && "error"} ${
                    className ? className : ""
                }`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {icon}
                <input id={id} placeholder={placeholder} type={type} {...register(id)} />
                <p className="error-message">{message[id]?.message}</p>
            </div>
        </>
    );
};

export default InputCustom;

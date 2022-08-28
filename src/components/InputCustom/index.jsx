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
    children,
}) => {
    return (
        <>
            <div
                className={`input-custom__wrapper ${children && "error"} ${className ? className : ""}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {icon}
                <input id={id} placeholder={placeholder} type={type} {...register(id)} />
                <p className="error-message">{children}</p>
            </div>
        </>
    );
};

export default InputCustom;

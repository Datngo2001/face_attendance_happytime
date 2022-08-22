import "./styles.scss";

const InputCustom = ({ id, icon, placeholder, width, height, register, className, type, children}) => {
    const handleOnFocus = () => {};
    return (
        <>
            <div
                className={`input-custom__wrapper ${className ? className : ""}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {icon}
                <input id={id} onFocus={handleOnFocus} placeholder={placeholder} type={type} {...register(id)} />
                <p className="error-message">{children}</p>
            </div>
        </>
    );
};

export default InputCustom;

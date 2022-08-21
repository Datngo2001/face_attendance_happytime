import "./styles.scss";

const InputCustom = ({ id, icon, placeholder, width, register, className, type, children }) => {
    const handleOnFocus = () => {};
    return (
        <>
            <div className={`input-custom__wrapper ${className}`}>
                {icon}
                <input onFocus={handleOnFocus} placeholder={placeholder} type={type} {...register(id)} />
                <p className="error-message">{children}</p>
            </div>
        </>
    );
};

export default InputCustom;

import "./styles.scss";

const SelectCustom = ({
    id,
    icon,
    placeholder,
    width,
    height,
    register,
    className,
    type,
    children,
    options,
}) => {
    return (
        <>
            <div
                className={`select-custom__wrapper ${className ? className : ""}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {icon}
                <select
                    required
                    id={id}
                    className={children && "select-custom__error"}
                    placeholder={placeholder}
                    type={type}
                    {...register(id)}
                >
                    <option value="" hidden>
                        {placeholder}
                    </option>
                    {options &&
                        options.map((option) => {
                            return (
                                <option value={option.id} key={option.id}>
                                    {option.name}
                                </option>
                            );
                        })}
                </select>
                <p className="error-message">{children}</p>
            </div>
        </>
    );
};

export default SelectCustom;

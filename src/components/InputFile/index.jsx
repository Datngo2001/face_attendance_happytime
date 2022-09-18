import "./styles.scss";

const InputFile = ({
    id,
    className,
    icon,
    label,
    placeholder,
    format,
    register,
    setValue,
    children,
}) => {
    return (
        <>
            <div className={`input-file__wrapper ${className ? className : ""}`}>
                {icon}
                <input type="file" />
            </div>
        </>
    );
};

export default InputFile;

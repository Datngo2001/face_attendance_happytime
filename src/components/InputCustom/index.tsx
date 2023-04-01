import "./styles.scss";
import { Controller } from "react-hook-form";

export type Props = {
    name: string,
    control: any,
    iconRight?: any,
    iconLeft?: any,
    placeholder?: string,
    width?: string,
    height?: string,
    className?: string,
    type?: string,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    handleOnClick?: any,
    disabled?: boolean,
}

const InputCustom: React.FC<Props> = ({
    name,
    control,
    iconRight,
    iconLeft,
    placeholder,
    width = "",
    height = "",
    className = "",
    type = "text",
    label,
    required = false,
    labelWidth,
    handleOnClick,
    disabled = false,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
            }) => (
                <div
                    className={`input-custom__wrapper ${className}`}
                    style={{ width: width, height: height }}
                >
                    {label && (
                        <div
                            className={`label ${required && "required"}`}
                            style={{ width: labelWidth }}
                        >
                            <label htmlFor={name}>
                                {label}
                                <span> *</span>
                            </label>
                        </div>
                    )}
                    <div
                        className={`container 
                        ${error ? "error" : ""}  
                        ${!iconLeft && !iconRight && "none-icon"} 
                        ${iconRight && "icon-right"} 
                        ${iconLeft && "icon-left"}`}
                    >
                        {iconLeft}
                        <input
                            id={name}
                            name={name}
                            value={value ?? ""}
                            onChange={onChange}
                            onBlur={onBlur}
                            ref={ref}
                            disabled={disabled}
                            placeholder={placeholder}
                            type={type}
                            onClick={handleOnClick}
                        />
                        {iconRight}
                        {error && <p className="error-message">{error.message}</p>}
                    </div>
                </div>
            )}
        />
    );
};

export default InputCustom;

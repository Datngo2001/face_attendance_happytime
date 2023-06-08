import "./styles.scss";
import { Controller } from "react-hook-form";

type Props = {
    name: string,
    control: any,
    min: number,
    max: number,
    iconRight?: any,
    iconLeft?: any,
    placeholder?: string,
    width?: string,
    height?: string,
    className?: string,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    handleOnClick?: any,
    disabled?: boolean,
}

const InputNumber: React.FC<Props> = ({
    name,
    control,
    min,
    max,
    iconRight,
    iconLeft,
    placeholder,
    width = "",
    height = "",
    className = "",
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
                    className={`input-number__wrapper ${className}`}
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
                            ${iconLeft && "icon-left"}`
                        }
                    >
                        {iconLeft}
                        <input
                            id={name}
                            name={name}
                            value={value}
                            onChange={(e) => {
                                let numberValue = parseInt(e.target.value)
                                if (isNaN(numberValue)) {
                                    e.target.value = "0"
                                } else if (numberValue < min || numberValue > max) {
                                    return
                                } else {
                                    e.target.value = numberValue.toString()
                                }
                                onChange(e)
                            }}
                            onBlur={onBlur}
                            ref={ref}
                            disabled={disabled}
                            placeholder={placeholder}
                            type="number"
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

export default InputNumber;

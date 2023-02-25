import { ForwardedRef, ReactElement, forwardRef } from "react";
import "./styles.scss";

export type Props = {
    id?: string,
    name: string,
    iconRight?: ReactElement,
    iconLeft?: ReactElement,
    placeholder?: string,
    width?: string,
    height?: string,
    register: Function,
    className?: string,
    type?: string,
    message?: any,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    isTextArea?: boolean
    defaultValue?: string,
    min?: string,
    max?: string
}

const InputCustom = forwardRef<HTMLInputElement, Props>(({
    id,
    name,
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
    labelWidth,
    handleOnClick,
    disabled = false,
    isTextArea = false,
    defaultValue = "",
    min,
    max
}, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <>
            <div
                className={`input-custom__wrapper ${className ? className : ""}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {label && (
                    <div
                        className={`label ${required && "required"}`}
                        style={{ width: labelWidth }}
                    >
                        <label htmlFor={id ?? name}>
                            {label}
                            <span> *</span>
                        </label>
                    </div>
                )}
                <div
                    className={`container ${message && message[id ?? name] ? "error" : ""}  ${!iconLeft && !iconRight && "none-icon"
                        } ${iconRight && "icon-right"} ${iconLeft && "icon-left"}`}
                >
                    {iconLeft}
                    {isTextArea ? (
                        <textarea
                            ref={ref}
                            id={id ?? name}
                            {...register(name)}
                            disabled={disabled}
                            placeholder={placeholder}
                            onClick={handleOnClick}
                            defaultValue={defaultValue} />
                    ) : (
                        <input
                            ref={ref}
                            min={min}
                            max={max}
                            disabled={disabled}
                            id={id ?? name}
                            placeholder={placeholder}
                            type={type}
                            {...register(name)}
                            onClick={handleOnClick}
                            defaultValue={defaultValue}
                        />
                    )}
                    {iconRight}
                    {message && <p className="error-message">{message[id ?? name]?.message}</p>}
                </div>
            </div>
        </>
    );
});

export default InputCustom;

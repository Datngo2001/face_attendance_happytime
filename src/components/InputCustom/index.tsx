import { ReactElement } from "react";
import "./styles.scss";

export type Props = {
    id: string,
    iconRight?: ReactElement,
    iconLeft?: string,
    placeholder?: string,
    width?: string,
    height?: string,
    register: Function,
    className?: string,
    type?: string,
    message?: string,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    isTextArea?: boolean
}

const InputCustom: React.FC<Props> = ({
    id,
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
    isTextArea = false
}) => {
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
                        <label htmlFor={id}>
                            {label}
                            <span> *</span>
                        </label>
                    </div>
                )}
                <div
                    className={`container ${message && message[id] ? "error" : ""}  ${!iconLeft && !iconRight && "none-icon"
                        } ${iconRight && "icon-right"} ${iconLeft && "icon-left"}`}
                >
                    {iconLeft}
                    {isTextArea ? (
                        <textarea
                            id={id}
                            {...register(id)}
                            disabled={disabled}
                            placeholder={placeholder}
                            onClick={handleOnClick} />
                    ) : (
                        <input
                            disabled={disabled}
                            id={id}
                            placeholder={placeholder}
                            type={type}
                            {...register(id)}
                            onClick={handleOnClick}
                        />
                    )}
                    {iconRight}
                    {message && <p className="error-message">{message[id]?.message}</p>}
                </div>
            </div>
        </>
    );
};

export default InputCustom;

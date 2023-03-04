import { useEffect, useState } from "react";
import "./styles.scss";

export type Props = {
    id: string,
    width: string,
    height: string,
    className?: string,
    label: string,
    maxLength?: number,
    register: any,
    setValue?: any,
    required?: string,
    placeholder: string,
    message?: string,
}

const InputNote: React.FC<Props> = ({
    id,
    width,
    height,
    className,
    label,
    maxLength = 500,
    register,
    setValue,
    required,
    placeholder,
    message,
}) => {
    // STATE
    const [length, setLength] = useState(0);
    // ****************************

    // ARROW FUNCTIONS
    const getLengthTextarea = () => {
        const textarea: any = document.getElementById(id);
        return textarea.value.length;
    };

    const handleOnChange = (e) => {
        setLength(getLengthTextarea);
    };
    // ****************************

    return (
        <>
            <div className="input-note__wrapper">
                {label && (
                    <div className="input-note__label">
                        <label htmlFor={id}>{label}</label>
                    </div>
                )}
                <div
                    className={`input-note__container ${message && message[id] ? "error" : ""
                        }`}
                    style={{ width: width, height: height }}
                >
                    <textarea
                        id={id}
                        placeholder={placeholder}
                        {...register(id)}
                        maxLength={maxLength}
                        onChange={handleOnChange}
                    />
                    {message && <p className="error-message">{message[id]?.message}</p>}
                </div>
                <div className="input-note__length">{`${length} / ${maxLength}`}</div>
            </div>
        </>
    );
};

export default InputNote;

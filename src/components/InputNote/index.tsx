import "./styles.scss";
import { Controller } from "react-hook-form";

type Props = {
    name: string,
    control: any,
    width: string,
    height: string,
    className?: string,
    label?: string,
    maxLength?: number,
    setValue?: any,
    required?: string,
    placeholder?: string,
}

const InputNote: React.FC<Props> = ({
    name,
    control,
    width = "",
    height = "",
    className = "",
    label,
    maxLength = 500,
    required = false,
    placeholder,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
            }) => (
                <div className="input-note__wrapper">
                    {label && (
                        <div className="input-note__label">
                            <label htmlFor={name}>{label}</label>
                        </div>
                    )}
                    <div
                        className={`input-note__container ${error ? "error" : ""}`}
                        style={{ width: width, height: height }}
                    >
                        <textarea
                            id={name}
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            ref={ref}
                            placeholder={placeholder}
                            maxLength={maxLength}
                        />
                        {error && <p className="error-message">{error.message}</p>}
                    </div>
                    <div className="input-note__length">{`${value ? value.length : 0} / ${maxLength}`}</div>
                </div>
            )}
        />
    );
};

export default InputNote;

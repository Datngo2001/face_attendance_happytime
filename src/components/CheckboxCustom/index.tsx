import { Controller } from "react-hook-form";
import "./styles.scss";

export type Props = {
    name: string;
    className?: string;
    label: string;
    control: any;

    width?: string;
    height?: string;
}

const CheckboxCustom: React.FC<Props> = ({ name, className, label, control, width, height }) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
            }) => (
                <div className={`checkbox-custom__wrapper ${className ? className : ""}`}>
                    <input
                        id={name}
                        className="checkbox"
                        style={{ width: width, height: height }}
                        type="checkbox"
                        name={name}
                        onChange={onChange}
                        checked={value}
                        onBlur={onBlur}
                        ref={ref}
                    />
                    <div className="label">
                        <label htmlFor={name}>{label}</label>
                    </div>
                </div>
            )}
        />
    );
};

export default CheckboxCustom;

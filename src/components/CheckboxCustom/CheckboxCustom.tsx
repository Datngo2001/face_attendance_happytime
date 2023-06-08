import "./styles.scss";

type Props = {
    name?: string;
    className?: string;
    label?: string;
    width?: string;
    height?: string;
    checked?: boolean;
    onChange?: any;
    disabled?: boolean
}

const CheckboxCustom: React.FC<Props> = ({ name, className, label, width, height, checked = false, onChange = () => { }, disabled = false }) => {
    return (
        <div className={`checkbox-custom__wrapper ${className ? className : ""}`}>
            <input
                id={name}
                className="checkbox"
                style={{ width: width, height: height }}
                type="checkbox"
                name={name}
                onChange={onChange}
                checked={checked}
                disabled={disabled}
            />
            <div className="label">
                <label htmlFor={name}>{label}</label>
            </div>
        </div>
    );
};

export default CheckboxCustom;

import "./styles.scss";

export type Props = {
    name?: string;
    className?: string;
    label?: string;
    width?: string;
    height?: string;
    checked?: boolean;
    onChange?: any;
}

const CheckboxCustom: React.FC<Props> = ({ name, className, label, width, height, checked = false, onChange = () => { } }) => {
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
            />
            <div className="label">
                <label htmlFor={name}>{label}</label>
            </div>
        </div>
    );
};

export default CheckboxCustom;

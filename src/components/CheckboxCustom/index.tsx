import "./styles.scss";

export type Props = {
    id: string;
    className?: string;
    label: string;
    register: any;
    width?: string;
    height?: string;
}

const CheckboxCustom: React.FC<Props> = ({ id, className, label, register, width, height }) => {
    return (
        <>
            <div className={`checkbox-custom__wrapper ${className ? className : ""}`}>
                <input
                    id={id}
                    className="checkbox"
                    style={{ width: width, height: height }}
                    type="checkbox"
                    {...register(id)}
                />
                <div className="label">
                    <label htmlFor={id}>{label}</label>
                </div>
            </div>
        </>
    );
};

export default CheckboxCustom;

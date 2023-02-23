import { ReactElement } from "react";
import "./styles.scss";

export type Props = {
    id?: string,
    icon?: ReactElement,
    type?: number,
    height?: string,
    width?: string
    onClick?: any,
    children?: any,
    className?: string,
    disabled?: boolean,
    isSubmit?: boolean
}

const ButtonCustom: React.FC<Props> = ({
    id,
    icon,
    type = 1,
    height,
    width,
    onClick,
    children,
    className,
    disabled,
    isSubmit = false
}) => {
    return (
        <>
            <button
                id={id}
                onClick={onClick}
                disabled={disabled || false}
                className={`btn-custom ${disabled ? "disabled" : ""} ${className ? className : ""
                    } ${type === 1 ? "type-1" : ""} ${type === 2 ? "type-2" : ""} ${type === 3 ? "type-3" : ""
                    }`}
                style={{ height: height ? height : "", width: width ? width : "" }}
                type={isSubmit ? "submit" : "button"}
            >
                {icon}
                {children}
            </button>
        </>
    );
};

export default ButtonCustom;

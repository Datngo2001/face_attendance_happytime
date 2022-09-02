import { Button } from "@mui/material";
import "./styles.scss";

const ButtonCustom = ({
    icon,
    height,
    width,
    onClick,
    children,
    className,
    disabled,
}) => {
    return (
        <>
            <Button
                onClick={onClick}
                disabled={disabled || false}
                className={`btn-custom ${disabled ? "disabled" : ""} ${
                    className ? className : ""
                }`}
                style={{ height: height ? height : "", width: width ? width : "" }}
            >
                {icon}
                {children}
            </Button>
        </>
    );
};

export default ButtonCustom;

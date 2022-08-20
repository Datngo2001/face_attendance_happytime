import { Button } from "@mui/material";
import "./styles.scss";

const ButtonCustom = ({ icon, height, width, onClick, children }) => {
    return (
        <>
            <Button onClick={onClick} className="btn-custom" style={{ height: height ? height : "", width: width ? width : "" }}>
                {icon}
                {children}
            </Button>
        </>
    );
};

export default ButtonCustom;

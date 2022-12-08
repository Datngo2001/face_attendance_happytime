import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.scss";

const ButtonSwitchCustom = ({ id, checked = false, defaultChecked, setValue }) => {
    // HOOK STATE
    const [isChecking, setIsChecking] = useState(defaultChecked);
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        if (setValue) {
            setValue(id, defaultChecked);
        }
    }, []);
    // ****************************

    // ARROW FUNCTIONS
    const handleOnChange = (e) => {
        if (setValue) {
            setValue(id, e.target.checked);
        }
        setIsChecking(e.target.checked);
    };
    // ****************************

    return (
        <>
            <Switch
                id={id}
                className="button-switch-custom__wrapper"
                onChange={handleOnChange}
                checked={defaultChecked !== undefined ? isChecking : checked}
            />
        </>
    );
};

export default ButtonSwitchCustom;

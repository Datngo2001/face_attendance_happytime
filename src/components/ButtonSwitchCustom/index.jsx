import { Switch } from "@mui/material";
import { useEffect } from "react";
import "./styles.scss";

const ButtonSwitchCustom = ({ id, checked, setValue }) => {
    // HOOK EFFECT
    useEffect(() => {
        if (setValue) {
            setValue(id, checked || false);
        }
    }, []);
    // ****************************

    // ARROW FUNCTIONS
    const handleOnChange = (e) => {
        if (setValue) {
            setValue(id, e.target.checked);
        }
    };
    // ****************************

    return (
        <>
            <Switch
                id={id}
                className="button-switch-custom__wrapper"
                onChange={handleOnChange}
                checked={checked}
            />
        </>
    );
};

export default ButtonSwitchCustom;

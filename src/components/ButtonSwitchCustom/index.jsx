import { Switch } from "@mui/material";
import "./styles.scss";

const ButtonSwitchCustom = ({ id, checked, setChecked }) => {
    const handleOnChange = (e) => {
        setChecked(e.target.checked);
    };

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

import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.scss";

export type Props = {
    id: string
    checked: boolean
    defaultChecked?: boolean
    setValue: any
}

const ButtonSwitchCustom: React.FC<Props> = ({ id, checked = false, defaultChecked, setValue }) => {
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
        <div className="button-switch-custom__wrapper">
            <Switch
                id={id}
                onChange={handleOnChange}
                checked={defaultChecked !== undefined ? isChecking : checked}
            />
        </div>
    );
};

export default ButtonSwitchCustom;

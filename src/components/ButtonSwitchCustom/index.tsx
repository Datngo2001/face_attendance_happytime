import { Switch } from "@mui/material";
import { useEffect, useState } from "react";
import "./styles.scss";

type Props = {
    id: string
    checked: boolean
    defaultChecked?: boolean
    setValue: any
    handleClick?: any
}

const ButtonSwitchCustom: React.FC<Props> = ({ id, checked = false, defaultChecked, setValue, handleClick }) => {
    // HOOK STATE
    const [isChecking, setIsChecking] = useState(defaultChecked ?? checked);
    console.log(isChecking)
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

    const onClick = (id, value) => {
        if (handleClick) handleClick(id, !value);
    }
    // ****************************

    return (
        <div className="button-switch-custom__wrapper">
            <Switch
                id={id}
                onClick={() => onClick(id, isChecking)}
                onChange={handleOnChange}
                checked={defaultChecked !== undefined ? isChecking : checked}
            />
        </div>
    );
};

export default ButtonSwitchCustom;

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.scss";
import { ReactElement, useEffect, useRef, useState } from "react";

export type Props = {
    id?: string;
    name: string;
    icon?: ReactElement;
    width?: string | number;
    height?: string | number;
    register?: any;
    onChange?: any;
    className?: string;
    message?: string;
    placeholder?: string;
    defaultValue?: string;
    options: SelectBoxOption[];
    setValue?: any;
    label?: string;
    required?: boolean,
    disabled?: boolean,
    value?: any;
}

export type SelectBoxOption = {
    id: string;
    name: string;
}

const SelectCustom: React.FC<Props> = ({
    id,
    name,
    icon,
    width,
    height,
    register,
    onChange,
    className,
    message = undefined,
    placeholder,
    defaultValue,
    options,
    setValue,
    label,
    required = false,
    disabled = false,
    value = "null"
}) => {
    // VARIABLES
    // ******************************

    // STATE
    const [isSelectedPlaceholder, SetIsSelectedPlaceholder] = useState(true);
    const [open, setOpen] = useState(false);
    // const [idItem, setIdItem] = useState("")
    // ******************************

    // EFFECT
    useEffect(() => {
        setValue && setValue(id, defaultValue);
    }, [defaultValue]);
    // ******************************

    // ARROW FUNCTIONS
    const handleOnFocus = (e) => {
        const selectElement = document.querySelector(`#${id}.MuiSelect-select`);
        if (selectElement.innerHTML !== placeholder) {
            document
                .querySelector(`#${id}.select-custom__wrapper`)
                .classList.remove("selected-placeholder");
            SetIsSelectedPlaceholder(false);
        }
    };

    const handleChange = () => {
        if (onChange) {
            return { onChange, value: value ?? "null" }
        }
        if (register) {
            return register(name)
        }
        return undefined
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // ******************************

    // CATCH ERRORS
    options || console.warn("Missing options!");
    // id || console.warn("Missing id");
    // ******************************
    return (
        <>
            <Box
                className={`select-custom__wrapper ${isSelectedPlaceholder && !defaultValue ? "selected-placeholder" : ""
                    } ${message && message[id ?? name] ? "error" : ""} ${className ? className : ""}`}
                sx={{ height: height, width: width }}
            >
                {label && (
                    <div
                        className={`select-custom__label ${required && "required"}`}
                        onClick={handleOpen}
                    >
                        {label}
                        <span> *</span>
                    </div>
                )}
                <FormControl fullWidth>
                    {icon}
                    <Select
                        labelId="label"
                        open={open}
                        disabled={disabled}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        {...handleChange()}
                        defaultValue={defaultValue || "null"}
                        inputProps={{ "aria-label": "Without label" }}
                        className={`select-item ${!icon && "none-icon"}`}
                    >
                        {!defaultValue && (
                            <MenuItem value={"null"} disabled>
                                {placeholder}
                            </MenuItem>
                        )}
                        {options &&
                            options.map((option) => {
                                return (
                                    <MenuItem value={option.id} key={option.id}>
                                        {option.name}
                                    </MenuItem>
                                );
                            })}
                    </Select>
                    {!(message === undefined) && (
                        <p className="error-message">{message[id ?? name]?.message}</p>
                    )}
                </FormControl>
            </Box>
        </>
    );
};

export default SelectCustom;

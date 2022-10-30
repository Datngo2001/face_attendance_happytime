import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.scss";
import { useEffect, useState } from "react";

export const SelectCustom = ({
    id,
    icon,
    width,
    height,
    register,
    className,
    message = undefined,
    placeholder,
    defaultValue,
    options,
    setValue,
}) => {
    // VARIABLES
    // ******************************

    // STATE
    const [isSelectedPlaceholder, SetIsSelectedPlaceholder] = useState(true);
    // ******************************

    // EFFECT
    useEffect(() => {
        !icon &&
            document
                .querySelector(`#${id} .MuiSelect-select`)
                .classList.add("none-icon");
    }, []);
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
    // ******************************

    // CATCH ERRORS
    options || console.warn("Missing options!");
    id || console.warn("Missing id");
    // ******************************

    return (
        <>
            <Box
                id={id}
                className={`select-custom__wrapper ${
                    isSelectedPlaceholder && !defaultValue ? "selected-placeholder" : ""
                } ${message && message[id] ? "error" : ""} ${className ? className : ""}`}
                sx={{ height: height, width: width }}
            >
                <FormControl fullWidth>
                    {icon}
                    <Select
                        id={id}
                        {...register(id)}
                        onFocus={handleOnFocus}
                        defaultValue={defaultValue || "null"}
                        style={{ height: height, width: width }}
                        inputProps={{ "aria-label": "Without label" }}
                        className="select-item"
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
                        <p className="error-message">{message[id]?.message}</p>
                    )}
                </FormControl>
            </Box>
        </>
    );
};

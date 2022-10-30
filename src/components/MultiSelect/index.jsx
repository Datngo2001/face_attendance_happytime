import "./styles.scss";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";

export default function MultiSelect({
    id,
    icon,
    width,
    height,
    className,
    register,
    placeholder,
    defaultValue,
    options,
}) {
    // STATE
    const [finalValue, setFinalValue] = useState([]);
    const [isSelectedPlaceholder, SetIsSelectedPlaceholder] = useState(true);

    // ******************************

    // EFFECT
    useEffect(() => {
        !icon &&
            document.querySelector(`#${id} .MuiSelect-select`).classList.add("none-icon");
    }, []);
    // ******************************

    // ARROW FUNCTIONS
    const checkExisting = (array, value) => {
        let check = false;
        array.forEach((item) => {
            item === value && (check = true);
        });

        return check;
    };

    const handleOnClick = (event) => {
        const value = event.target.getAttribute("data-value");

        if (checkExisting(finalValue, value)) {
            setFinalValue(
                finalValue.filter((element) => {
                    return element !== value;
                })
            );
        } else {
            setFinalValue(
                finalValue.length > 0
                    ? (finalValue + "," + value).split(",")
                    : value.split()
            );
        }
    };

    const handleOnFocus = (e) => {
        const selectElement = document.querySelector(`#${id}.MuiSelect-select`);
        if (selectElement.innerHTML !== placeholder) {
            document
                .querySelector(`#${id}.select-custom__wrapper`)
                .classList.remove("selected-placeholder");
            SetIsSelectedPlaceholder(false);
        }
    };

    const convertToText = (array, options) => {
        const tempArray = [];
        array.forEach((ele) => {
            tempArray.push(options.find((e) => e.id === parseInt(ele)).name);
        });

        return tempArray;
    };
    // ******************************

    return (
        <Box
            id={id}
            className={`select-custom__wrapper ${
                isSelectedPlaceholder && !defaultValue ? "selected-placeholder" : ""
            } ${className ? className : ""}`}
            sx={{ height: height, width: width }}
        >
            <FormControl fullWidth>
                {icon}
                <Select
                    id={id}
                    {...register(id)}
                    multiple
                    displayEmpty
                    onFocus={handleOnFocus}
                    defaultValue={"null"}
                    value={finalValue}
                    style={{ height: height, width: width }}
                    inputProps={{ "aria-label": "Without label" }}
                    className="select-item"
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return placeholder;
                        }
                        return convertToText(selected, options).join(", ");
                    }}
                >
                    {options &&
                        options.map((option) => {
                            return (
                                <MenuItem
                                    value={option.id}
                                    key={option.id}
                                    onClick={handleOnClick}
                                >
                                    {option.name}
                                </MenuItem>
                            );
                        })}
                </Select>
            </FormControl>
        </Box>
    );
}

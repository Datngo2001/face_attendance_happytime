import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.scss";
import { ReactElement, useState } from "react";
import { Controller } from "react-hook-form";

export type Props = {
    name: string;
    control?: any;
    options: SelectBoxOption[];
    icon?: ReactElement;
    width?: string | number;
    height?: string | number;
    className?: string;
    placeholder?: string;
    label?: string;
    required?: boolean,
    disabled?: boolean,
}

export type SelectBoxOption = {
    id: string | number;
    name: string;
}

const SelectCustom: React.FC<Props> = ({
    name,
    control,
    icon,
    width,
    height,
    className = "",
    placeholder,
    options,
    label,
    required = false,
    disabled = false,
}) => {
    // STATE
    const [open, setOpen] = useState(false);
    // const [idItem, setIdItem] = useState("")
    // ******************************

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // ******************************

    const isValidValue = (value) => {
        return options.find(x => x.id === parseInt(value)) ? true : false;
    }

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
            }) => (
                <Box
                    className={`select-custom__wrapper 
                        ${isValidValue(value) ? "" : "selected-placeholder"} 
                        ${error ? "error" : ""} 
                        ${className}`}
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
                            placeholder={placeholder}
                            labelId="label"
                            open={open}
                            disabled={disabled}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name={name}
                            value={isValidValue(value) ? value : "null"}
                            onChange={onChange}
                            onBlur={onBlur}
                            inputRef={ref}
                            inputProps={{ "aria-label": "Without label" }}
                            className={`select-item ${!icon && "none-icon"}`}
                        >
                            <MenuItem value={"null"} disabled>
                                {placeholder}
                            </MenuItem>
                            {options.map((option) => {
                                return (
                                    <MenuItem value={option.id} key={option.id}>
                                        {option.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        {error && (<p className="error-message">{error.message}</p>)}
                    </FormControl>
                </Box>
            )}
        />
    );
};

export default SelectCustom;

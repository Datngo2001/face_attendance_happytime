import "./styles.scss";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Controller } from "react-hook-form";

export type Props = {
    name: string,
    control: any,
    options: any,
    className?: string,
    icon?: any,
    width?: string,
    height?: string,
    placeholder?: string,
}

const MultiSelect: React.FC<Props> = ({
    name,
    control,
    icon,
    width = "",
    height = "",
    className = "",
    placeholder,
    options,
}) => {

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
                        ${className}  
                        ${!value ? "selected-placeholder" : ""} 
                        ${icon ? "none-icon" : ""}`
                    }
                    sx={{ height: height, width: width }}
                >
                    <FormControl fullWidth>
                        {icon}
                        <Select
                            id={name}
                            name={name}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            inputRef={ref}
                            multiple
                            displayEmpty
                            defaultValue={"null"}
                            style={{ height: height, width: width }}
                            inputProps={{ "aria-label": "Without label" }}
                            className="select-item"
                        >
                            {options &&
                                options.map((option) => {
                                    return (
                                        <MenuItem
                                            value={option.id}
                                            key={option.id}
                                        >
                                            {option.name}
                                        </MenuItem>
                                    );
                                })}
                        </Select>
                    </FormControl>
                </Box>
            )}
        />
    );
}

export default MultiSelect
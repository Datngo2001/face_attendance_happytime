import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.scss";
import { ReactElement, useState } from "react";
import { Controller } from "react-hook-form";
import CheckboxCustom from "components/CheckboxCustom/CheckboxCustom";
import { Chip } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import ChipCustom from "components/ChipCustom";

type Props = {
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
    isMultiple?: boolean,
    useCheckBox?: boolean,
    handleChange?: any
}

export type SelectBoxOption = {
    id: string | number;
    name: string;
    subLabel?: string;
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
    isMultiple = false,
    useCheckBox = false,
    handleChange = () => { }
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
        return options.find(option => {
            if (isMultiple) {
                return value?.includes(option.id)
            } else {
                return option.id.toString() === value?.toString();
            }
        }) ? true : false;
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
                    // className={`select-custom__wrapper 
                    //     ${isValidValue(value) ? "" : "selected-placeholder"} 
                    //     ${error ? "error" : ""} 
                    //     ${className}`}
                    className={`select-custom__wrapper selected-placeholder
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
                            multiple={isMultiple}
                            labelId="label"
                            open={open}
                            disabled={disabled}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name={name}
                            value={isValidValue(value) ? value : (isMultiple ? [] : "null")}
                            onChange={(e) => {
                                onChange(e); handleChange(e);
                            }}
                            inputProps={{ "aria-label": "Without label" }}
                            className={`select-item ${!icon && "none-icon"} ${isMultiple && "isMultiple"}`}
                            renderValue={selected => isMultiple ? renderMuiltiSelectOption(disabled, options, value, (id) => onChange(value.filter(x => x !== id)), placeholder) : options.find(x => x.id === value)?.name ?? placeholder}
                        >
                            <MenuItem value={isMultiple ? [] : "null"} disabled>
                                {placeholder}
                            </MenuItem>
                            {options.map((option) => {
                                return (
                                    <MenuItem value={option.id} key={option.id}>
                                        {useCheckBox && <CheckboxCustom className="multi-select-checkbox" checked={isMultiple ? value.includes(option.id) : (value === option.id)} />}
                                        {option.name}
                                        {option.subLabel && `   (${option.subLabel})`}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        {error && (<p className="error-message">{error.message}</p>)}
                    </FormControl>
                </Box >
            )}
        />
    );
};

function renderMuiltiSelectOption(disabled: boolean, options: SelectBoxOption[], value: string[], onDelete: any = () => { }, placeholder: string): React.ReactNode {
    var selecteds = options.filter(opt => value.includes(opt.id.toString()))
    return (
        <div className="selectbox-ship-container">
            {selecteds.length > 0 && selecteds.map(selected => (
                <ChipCustom clickable key={selected.id}
                    deleteIcon={<CancelIcon onMouseDown={(event) => event.stopPropagation()} />}
                    label={selected.name} onDelete={disabled ? () => { } : () => onDelete(selected.id)} />
            ))}
            {selecteds.length === 0 && (<>{placeholder}</>)}
        </div>
    )
}

export default SelectCustom;

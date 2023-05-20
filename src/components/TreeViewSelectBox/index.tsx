import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./styles.scss";
import { useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import OptionNode from "./OptionNode";

export type Props = {
    name: string;
    control: any;
    setValue: any;
    options: SelectBoxNode[];
    leftIndent?: number;
    topIndent?: number;
    width?: string | number;
    height?: string | number;
    className?: string;
    placeholder?: string;
    label?: string;
    required?: boolean,
    disabled?: boolean,
}

export type SelectBoxNode = {
    id: string | number;
    name: string;
    canSelect: boolean;
    children: SelectBoxNode[]
}

const TreeViewSelectBox: React.FC<Props> = ({
    name,
    control,
    setValue,
    leftIndent = 10,
    topIndent = 10,
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

    const placeholderItems = useMemo(() => renderPlaceholerItems(options), [options])

    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { error },
            }) => (
                <Box
                    className={`tree-view-select__wrapper 
                        selected-placeholder
                        ${error ? "error" : ""} 
                        ${className}`}
                    sx={{ height: height, width: width }}
                >
                    {label && (
                        <div
                            className={`tree-view-select__label ${required && "required"}`}
                            onClick={handleOpen}
                        >
                            {label}
                            <span> *</span>
                        </div>
                    )}
                    <FormControl fullWidth>
                        <Select
                            placeholder={placeholder}
                            labelId="label"
                            open={open}
                            disabled={disabled}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            name={name}
                            value={value == null ? "null" : value}
                            onBlur={onBlur}
                            inputRef={ref}
                            inputProps={{ "aria-label": "Without label" }}
                            className="select-item"
                        >
                            <MenuItem value={"null"} sx={{ display: "none" }}>
                                {placeholder}
                            </MenuItem>
                            {placeholderItems}
                            {options.map(option => (
                                <OptionNode
                                    currentValue={value}
                                    handleSelect={(val) => { handleClose(); setValue(name, val); }}
                                    node={option}
                                    depth={1}
                                    leftIndent={leftIndent}
                                    topIndent={topIndent} />
                            ))}
                        </Select>
                        {error && (<p className="error-message">{error.message}</p>)}
                    </FormControl>
                </Box>
            )}
        />
    );
};

function renderPlaceholerItems(options: SelectBoxNode[]): JSX.Element[] {
    let items: JSX.Element[] = []

    options.forEach(option => {
        items.push((
            <MenuItem key={`placeholer_${option.id}`} value={option.id}
                sx={{ display: "none" }}>
                {option.name}
            </MenuItem>
        ))

        items.push(...renderPlaceholerItems(option.children))
    })

    return items
}

export default TreeViewSelectBox;

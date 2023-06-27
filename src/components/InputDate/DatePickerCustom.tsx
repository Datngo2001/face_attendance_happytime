import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import "./styles.scss";
import { Controller, useController } from "react-hook-form";
import { DateFormat } from "./default";

type Props = {
  name: string,
  control: any,
  className?: string,
  height?: string,
  width?: string,
  label?: string,
  placeholder?: string,
  required?: boolean,
  disabled?: boolean
};

const DatePickerCustom: React.FC<Props> = ({
  name,
  control,
  className,
  height,
  width,
  label,
  placeholder,
  required = false,
  disabled = false,
}) => {
  const { field: { value, onChange }, fieldState: { error } } = useController({ control, name })

  const getValue = () => {
    if (value) {
      if (typeof value == "number") {
        return dayjs(value)
      } else {
        return dayjs(value, DateFormat)
      }
    }
    return null
  }

  const handleChange = (date, dateString) => {
    if (typeof value == "number") {
      onChange(date.toDate().getTime())
    } else {
      onChange(dateString)
    }
  }

  return (

    <div
      className={`date-picker-custom__wrapper ${className ? className : ""} ${error ? "error" : ""}`}
    >
      {label && (
        <div className={`label ${required && "required"}`}>
          <label htmlFor={name}>
            {label}
            <span className="required"> *</span>
          </label>
        </div>
      )}

      <div className="date-picker-custom__container">
        <DatePicker
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          style={{ height: height, width: width }}
          locale={locale}
          value={getValue()}
          format={DateFormat}
          onChange={handleChange}
        />
        {error && <p className="error-message">{error.message}</p>}
      </div>
    </div>
  );
};

export default DatePickerCustom;

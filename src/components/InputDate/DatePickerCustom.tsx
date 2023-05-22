import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import "./styles.scss";
import { Controller } from "react-hook-form";
import { DateFormat } from "./default";

export type Props = {
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

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value, name },
        fieldState: { error }
      }) => (
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
              value={value ? (typeof value == "number" ? dayjs(value) : dayjs(value, DateFormat)) : null}
              format={DateFormat}
              onChange={(date, dateString) => { typeof value == "number" ? onChange(date.toDate().getTime()) : onChange(dateString) }}
            />
            {error && <p className="error-message">{error.message}</p>}
          </div>
        </div>
      )}
    />
  );
};

export default DatePickerCustom;

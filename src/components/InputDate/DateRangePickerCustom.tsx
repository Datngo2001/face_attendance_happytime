import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import "./styles.scss";
import { Controller } from "react-hook-form";
import { DateFormat, DateRangeViewFormat } from "./default";
import { convertStringToTimestamp, convertTimestampToString } from "utils";

export type Props = {
  name: string,
  fromName: string,
  toName: string,
  fromLabel?: string,
  toLabel?: string,
  control: any,
  className?: string,
  height?: string,
  width?: string,
  label?: string,
  required?: boolean,
  disabled?: boolean
};

const { RangePicker } = DatePicker;

const DateRangePickerCustom: React.FC<Props> = ({
  name,
  fromName,
  toName,
  fromLabel,
  toLabel,
  control,
  className,
  height,
  width,
  label,
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
          className={`date-range-picker-custom__wrapper ${className ? className : ""} ${error ? "error" : ""}`}
        >
          {label && (
            <div className={`label ${required && "required"}`}>
              <label htmlFor={name}>
                {label}
                <span className="required"> *</span>
              </label>
            </div>
          )}
          <div className="date-range-picker-custom__container">
            <RangePicker
              id={name}
              allowClear
              disabled={disabled}
              allowEmpty={[false, true]}
              placeholder={[fromLabel, toLabel]}
              style={{ height: height, width: width }}
              locale={locale}
              value={[
                value[fromName] ? dayjs(convertTimestampToString(value[fromName]), DateFormat) : null,
                value[toName] ? dayjs(convertTimestampToString(value[toName]), DateFormat) : null
              ]}
              format={DateRangeViewFormat}
              onChange={(date, dateString) => {
                let newValue = { ...value }
                newValue[fromName] = dayjs(date[0]).toDate().getTime();
                newValue[toName] = dayjs(date[1]).toDate().getTime();
                if (Number.isNaN(newValue[toName])) {
                  newValue[toName] = 0
                }
                onChange(newValue)
              }}
            />
            {error && <p className="error-message">{error.message}</p>}
          </div>
        </div>
      )}
    />
  );
};

export default DateRangePickerCustom;

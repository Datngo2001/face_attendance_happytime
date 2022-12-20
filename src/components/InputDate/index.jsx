import { DatePicker } from "antd";
import locale from "antd/es/date-picker/locale/vi_VN";
import dayjs from "dayjs";
import { useEffect } from "react";
import "./styles.scss";

const InputDate = ({
    id,
    className,
    height,
    width,
    setValue,
    label,
    placeholder,
    required = false,
    message,
    trigger,
    defaultValue,
    type = 1,
}) => {
    // VARIABLES
    const dateFormat = "DD/MM/YYYY";
    const { RangePicker } = DatePicker;
    // ******************************

    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        defaultValue ? setValue(id, defaultValue) : setValue(id, "");
    }, []);
    // ****************************

    // ARROW FUNCTIONS
    const onChange = (date, dateString) => {
        setValue(id, dateString);
        trigger(id);
    };
    // *****************************

    return (
        <>
            <div
                className={`input-date__wrapper ${className ? className : ""} ${
                    message && message[id] ? "error" : ""
                }`}
            >
                {label && (
                    <div className={`label ${required && "required"}`}>
                        <label htmlFor={id}>
                            {label}
                            <span className="required"> *</span>
                        </label>
                    </div>
                )}
                <div className="input-date__container">
                    {type === 1 ? (
                        <DatePicker
                            id={id}
                            defaultValue={
                                defaultValue ? dayjs(defaultValue, dateFormat) : ""
                            }
                            placeholder={placeholder}
                            style={{ height: height, width: width }}
                            locale={locale}
                            format={dateFormat}
                            onChange={onChange}
                        />
                    ) : (
                        <RangePicker
                            id={id}
                            placeholder={placeholder}
                            defaultValue={[
                                dayjs("20/10/2022", dateFormat),
                                dayjs("14/12/2022", dateFormat),
                            ]}
                            locale={locale}
                            style={{ height: height, width: width }}
                            format={dateFormat}
                            onChange={onChange}
                        />
                    )}
                    {message && <p className="error-message">{message[id]?.message}</p>}
                </div>
            </div>
        </>
    );
};

export default InputDate;

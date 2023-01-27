import { convertDayToNameDay } from "../../../../../../../../utils/convertFunctions";
import "./styles.scss";

const HeaderWeekdays = ({ day, date }) => {
    // VARIABLES
    const nameDay = convertDayToNameDay({
        day: day,
    });
    // ********************************

    return (
        <>
            <div
                className={`attendances--summary--table--header-weekdays__wrapper ${
                    day === 6 || day === 0 ? "opacity" : ""
                }`}
            >
                <p className="weekdays">{nameDay}</p>
                <span>-</span>
                <p className="date">{date}</p>
            </div>
        </>
    );
};

export default HeaderWeekdays;

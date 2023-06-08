import { convertDayToNameDay } from "utils";
import "./styles.scss";

type Props = {
    day: number
    date: string
}

const HeaderWeekdays: React.FC<Props> = ({ day, date }) => {
    // VARIABLES
    const nameDay = convertDayToNameDay({
        day: day,
    });
    // ********************************

    return (
        <>
            <div
                className={`attendances--summary--table--header-weekdays__wrapper ${day === 6 || day === 0 ? "opacity" : ""
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

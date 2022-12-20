import "./styles.scss";

const HeaderWeekdays = ({ weekdays, date }) => {
    return (
        <>
            <div className="attendances--summary--table--header-weekdays__wrapper">
                <p className="weekdays">{weekdays}</p>
                <span>-</span>
                <p className="date">{date}</p>
            </div>
        </>
    );
};

export default HeaderWeekdays;

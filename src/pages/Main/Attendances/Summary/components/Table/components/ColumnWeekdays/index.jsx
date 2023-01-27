import "./styles.scss";

const ColumnWeekdays = ({ morning = 6, afternoon = 6, isDayOff = false }) => {
    return (
        <>
            <div
                className={`attendances--summary--table--column-weekdays__wrapper ${
                    morning === 6 && afternoon === 6 && !isDayOff ? "no-timekeeping" : ""
                } ${isDayOff ? "day-off" : ""}`}
            >
                {!isDayOff && (
                    <>
                        <div className="morning">
                            <span className="label">SA</span>
                            <div className={`icon type-${morning}`}></div>
                        </div>
                        <div className="afternoon">
                            <span className="label">CH</span>
                            <div className={`icon type-${afternoon}`}></div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default ColumnWeekdays;

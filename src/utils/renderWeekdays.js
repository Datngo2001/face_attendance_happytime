const renderWeekdays = (timeStart) => {
    let weekdays = [];
    const [DD, MM, YYYY] = timeStart.split("/");

    for (let i = 0; i < 7; i++) {
        let temp = new Date(MM + "/" + DD + "/" + YYYY);
        temp = temp.setDate(temp.getDate() + i);
        temp = new Date(temp);
        weekdays.push({
            day: temp.getDay(),
            date: temp.getDate() + "/" + (parseInt(temp.getMonth()) + 1),
        });
    }
    return weekdays;
};

export default renderWeekdays;

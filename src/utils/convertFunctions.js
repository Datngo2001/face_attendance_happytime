import dayjs from "dayjs";

export const convertTimestampToString = (timestamp) => {
    if (timestamp) {
        const date = new Date(timestamp);
        return dayjs(date).format("DD/MM/YYYY");
    }
    return "";
};

export const convertStringToTimestamp = (string) => {
    if (string) {
        const [day, month, year] = string.split("/");
        const date = new Date(+year, month - 1, +day);
        return date.getTime();
    }
    return null;
};

export const convertIdToName = ({ id, list = [] }) => {
    const item = list.find((e) => {
        return parseInt(e.id) === parseInt(id);
    });
    return item?.name || "Chưa cập nhật";
};

export const convertDayToNameDay = ({ day, type = 1 }) => {
    let finalResult = {};
    switch (day) {
        case 0:
            finalResult = type === 1 ? "Chủ nhật" : "sunday";
            break;
        case 1:
            finalResult = type === 1 ? "Thứ 2" : "monday";
            break;
        case 2:
            finalResult = type === 1 ? "Thứ 3" : "tuesday";
            break;
        case 3:
            finalResult = type === 1 ? "Thứ 4" : "wednesday";
            break;
        case 4:
            finalResult = type === 1 ? "Thứ 5" : "thursday";
            break;
        case 5:
            finalResult = type === 1 ? "Thứ 6" : "friday";
            break;
        case 6:
            finalResult = type === 1 ? "Thứ 7" : "saturday";
            break;
        default:
    }

    return finalResult;
};

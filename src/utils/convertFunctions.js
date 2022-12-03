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

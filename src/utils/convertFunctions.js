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

export const convertRoleIdToTitle = (role) => {
    switch (role) {
        case 1:
            return "Admin";
        case 2:
            return "User";
        default:
            return "Chưa cập nhật";
    }
};
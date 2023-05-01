import ListShifts from "./list";
import ShilftTypes from "./types";

export const listTabs = [
    {
        title: "Dach sách ca làm việc",
        disabled: false,
        component: <ListShifts />,
    },
    {
        title: "Danh sách loại ca làm việc",
        disabled: false,
        component: <ShilftTypes />,
    },
];

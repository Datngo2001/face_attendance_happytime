import RouterRoundedIcon from "@mui/icons-material/RouterRounded";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export const dataListButtonSideLeft = [
    {
        path: "shifts",
        title: "Ca làm việc",
        icon: <RouterRoundedIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2 }} />,
    },
    {
        path: "shift-assignments",
        title: "Phân ca",
        icon: <CalendarMonthIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2 }} />,
    },
    {
        path: "shift-result",
        title: "Kết quả phân ca",
        icon: <EventAvailableIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2 }} />,
    },
];

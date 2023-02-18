import ListRoundedIcon from "@mui/icons-material/ListRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import DateRangeRoundedIcon from "@mui/icons-material/DateRangeRounded";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import LocalActivityRoundedIcon from "@mui/icons-material/LocalActivityRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";


export const listNavigatorOptions = [
    {
        icon: <ListRoundedIcon />,
        linkTo: "attendances/summary",
        title: "Bảng công",
        pathActive: "attendances",
    },
    {
        icon: <DescriptionRoundedIcon />,
        linkTo: "requests",
        title: "Đơn từ",
        pathActive: "requests",
    },
    {
        icon: <GroupRoundedIcon />,
        linkTo: "employees/list/index",
        title: "Quản lý nhân sự",
        pathActive: "employees",
    },
    {
        icon: <ApartmentRoundedIcon />,
        linkTo: "company/info",
        title: "Cài đặt doanh nghiệp",
        pathActive: "company",
    },
    {
        icon: <DateRangeRoundedIcon />,
        linkTo: "schedule/shifts",
        title: "Cài đặt lịch",
        pathActive: "schedule",
    },
    {
        icon: <FingerprintRoundedIcon />,
        linkTo: "attendance-settings/methods",
        title: "Cài đặt chấm công",
        pathActive: "attendance-settings",
    },
    {
        icon: <NewspaperRoundedIcon />,
        linkTo: "news/categories",
        title: "Tin tức",
        pathActive: "news",
    },
    {
        icon: <EventNoteRoundedIcon />,
        linkTo: "popup/event",
        title: "Popup",
        pathActive: "popup",
    },
    {
        icon: <LocalActivityRoundedIcon />,
        linkTo: "event/personal",
        title: "Sự kiện",
        pathActive: "event",
    },
    {
        icon: <InfoRoundedIcon />,
        linkTo: "others/integration",
        title: "Quản lý khác",
        pathActive: "others",
    },
];

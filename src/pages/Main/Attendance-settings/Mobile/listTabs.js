import { Devices, Wifi } from "./components";

export const listTabs = [
    {
        title: "Danh sách ip wi-fi",
        disabled: false,
        component: <Wifi />,
    },
    {
        title: "Danh sách BSSID Wi-fi",
        disabled: true,
    },
    {
        title: "Danh sách vị trí",
        disabled: true,
    },
    {
        title: "Danh sách device id",
        disabled: false,
        component: <Devices />,
    },
];

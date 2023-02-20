import { ShiftPage, Shifts } from "pages/Main/Schedule";

const scheduleRouters = [
    {
        path: "shifts",
        component: <Shifts />,
    },
    {
        path: "shifts/:action/:typeid",
        component: <ShiftPage />,
    },
];

export default scheduleRouters;

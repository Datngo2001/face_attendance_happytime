import { CreateShift, Shifts } from "pages/Main/Schedule";

const scheduleRouters = [
    {
        path: "shifts",
        component: <Shifts />,
    },
    {
        path: "shifts/create/:typeid",
        component: <CreateShift />,
    },
];

export default scheduleRouters;

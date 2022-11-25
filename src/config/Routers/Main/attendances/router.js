import { Setting, Summary } from "../../../../pages/Main/Attendances";

const attendancesRouters = [
    {
        path: "summary",
        component: <Summary />,
    },
    {
        path: "setting",
        component: <Setting />,
    },
];

export default attendancesRouters;

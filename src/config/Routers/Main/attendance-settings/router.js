import { Methods, Mobile } from "../../../../pages/Main/Attendance-settings";

const attendancesSettingsRouters = [
    {
        path: "methods",
        component: <Methods />,
    },
    {
        path: "mobile",
        component: <Mobile />,
    },
];

export default attendancesSettingsRouters;

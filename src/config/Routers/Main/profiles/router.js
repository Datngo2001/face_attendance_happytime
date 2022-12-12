import { ChangePassword, Info } from "../../../../pages/Main/Profile";

const profileRouters = [
    {
        path: "info",
        component: <Info />,
    },
    {
        path: "change-password",
        component: <ChangePassword />,
    },
];

export default profileRouters;

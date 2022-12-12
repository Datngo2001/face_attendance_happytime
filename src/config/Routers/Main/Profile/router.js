import { ChangePassword, Info } from "../../../../pages/Main/Profile";

export const profileRouters = [
    {
        path: "info",
        component: <Info />,
    },
    {
        path: "change-password",
        component: <ChangePassword />,
    },
];


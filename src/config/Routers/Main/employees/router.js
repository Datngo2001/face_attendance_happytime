import { Index, Update, View } from "../../../../pages/Main/Employees";

const empoyeesRouters = [
    {
        path: "list/index",
        component: <Index />,
    },
    {
        path: "list/view",
        component: <View />,
    },
    {
        path: "list/update",
        component: <Update />,
    },
    {
        path: "leave-management",
        component: "",
    },
];

export default empoyeesRouters;

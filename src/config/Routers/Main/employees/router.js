import { Index, View } from "../../../../pages/Main/Employees";

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
        path: "leave-management",
        component: "",
    },
];

export default empoyeesRouters;

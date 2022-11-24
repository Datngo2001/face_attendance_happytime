import {
    Create,
    Index,
    LeaveManagement,
    Update,
    View,
} from "../../../../pages/Main/Employees";

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
        path: "list/create",
        component: <Create />,
    },
    {
        path: "list/update",
        component: <Update />,
    },
    {
        path: "leave-management",
        component: <LeaveManagement />,
    },
];

export default empoyeesRouters;

import {
    Create,
    Index,
    LeaveManagement,
    Update,
    View,
    PermissionList
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
    {
        path: "permission-setting/list",
        component: <PermissionList />,
    },
];

export default empoyeesRouters;

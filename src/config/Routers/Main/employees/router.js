import React from "react"

const Index = React.lazy(() => import("pages/Main/Employees/List/Index"));
const Create = React.lazy(() => import("pages/Main/Employees/List/Create"));
const Update = React.lazy(() => import("pages/Main/Employees/List/Update"));
const View = React.lazy(() => import("pages/Main/Employees/List/View"));
const LeaveManagement = React.lazy(() => import("pages/Main/Employees/Leave-management"));
const PermissionList = React.lazy(() => import("pages/Main/Employees/Permission-management/List"));

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

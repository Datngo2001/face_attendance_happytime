import React from "react"

const Index = React.lazy(() => import("pages/Main/Employees/List/Index"));
const Create = React.lazy(() => import("pages/Main/Employees/List/Create"));
const Update = React.lazy(() => import("pages/Main/Employees/List/Update"));
const View = React.lazy(() => import("pages/Main/Employees/List/View"));
const LeaveManagement = React.lazy(() => import("pages/Main/Employees/Leave-management"));
const PermissionList = React.lazy(() => import("pages/Main/Employees/Permission-management/List"));
const CreatePermission = React.lazy(() => import("pages/Main/Employees/Permission-management/Create"));
const ViewPermission = React.lazy(() => import("pages/Main/Employees/Permission-management/View"));

const empoyeesRouters = [
    {
        path: "list/index",
        component: <Index />,
    },
    {
        path: "list/create",
        component: <Create />,
    },
    {
        path: "list/update/:id",
        component: <Update />,
    },
    {
        path: "list/view/:id",
        component: <View />,
    },
    {
        path: "leave-management",
        component: <LeaveManagement />,
    },
    {
        path: "permission-setting/list",
        component: <PermissionList />,
    },
    {
        path: "permission-setting/create",
        component: <CreatePermission />,
    },
    {
        path: "permission-setting/:id/view",
        component: <ViewPermission />,
    },
];

export default empoyeesRouters;

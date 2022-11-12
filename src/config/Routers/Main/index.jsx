import EmployeesLayout from "../../../layouts/Main/employees";
import ProfileLayout from "../../../layouts/Main/profile";
import RequestsLayout from "../../../layouts/Main/requests";
import WorkspaceSettingsLayout from "../../../layouts/Main/workspace-settings";
import empoyeesRouters from "./employees/router";
import profileRouters from "./profile/router";
import workspaceSettingsRouters from "./workspace-settings/router";

const mainRouters = [
    {
        path: "employees",
        component: <EmployeesLayout />,
        listChildrenRoutes: empoyeesRouters,
    },
    {
        path: "requests",
        component: <RequestsLayout />,
        listChildrenRoutes: [
            {
                path: "",
                component: "",
            },
        ],
    },
    {
        path: "profile",
        component: <ProfileLayout />,
        listChildrenRoutes: profileRouters,
    },
    {
        path: "",
        component: <WorkspaceSettingsLayout />,
        listChildrenRoutes: workspaceSettingsRouters,
    },
];

export default mainRouters;

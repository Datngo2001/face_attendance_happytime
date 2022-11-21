import CompanyLayout from "../../../layouts/Main/company";
import EmployeesLayout from "../../../layouts/Main/employees";
import ProfileLayout from "../../../layouts/Main/profile";
import RequestsLayout from "../../../layouts/Main/requests";
import WorkspaceSettingsLayout from "../../../layouts/Main/workspace-settings";
import companyRouters from "./company/router";
import empoyeesRouters from "./employees/router";
import profileRouters from "./profile/router";
import workspaceSettingsRouters from "./workspace-settings/router";

const mainRouters = [
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
        path: "employees",
        component: <EmployeesLayout />,
        listChildrenRoutes: empoyeesRouters,
    },
    {
        path: "company",
        component: <CompanyLayout />,
        listChildrenRoutes: companyRouters,
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

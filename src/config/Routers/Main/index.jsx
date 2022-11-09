import EmployeesLayout from "../../../layouts/Main/employees";
import ProfileLayout from "../../../layouts/Main/profile";
import RequestsLayout from "../../../layouts/Main/requests";
import empoyeesRouters from "./employees/router";
import profileRouters from "./Profile/router";

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
        listChildrenRoutes: profileRouters
    }
];

export default mainRouters;

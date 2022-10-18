import EmployeesLayout from "../../../layouts/Main/employees";
import RequestsLayout from "../../../layouts/Main/requests";
import empoyeesRouters from "./employees/router";

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
];

export default mainRouters;

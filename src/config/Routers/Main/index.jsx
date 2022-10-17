import EmployeesLayout from "../../../layouts/Main/employees";
import RequestsLayout from "../../../layouts/Main/requests";

const mainRouters = [
    {
        path: "employees",
        component: <EmployeesLayout />,
        listChildrenRoutes: [
            {
                path: "",
                component: "",
            },
            {
                path: "",
                component: "",
            },
        ],
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

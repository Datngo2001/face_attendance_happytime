import { ShiftPage, ShiftResult, Shifts } from "pages/Main/Schedule";
import ShiftAssignmentsList from "pages/Main/Schedule/shift-assignments/list";
import ShiftAssignment from "pages/Main/Schedule/shift-assignments/shift-assignment";

const scheduleRouters = [
    {
        path: "shifts",
        component: <Shifts />,
    },
    {
        path: "shifts/:action/:typeid/:id",
        component: <ShiftPage />,
    },
    {
        path: "shifts/:action/:typeid",
        component: <ShiftPage />,
    },
    {
        path: "shift-assignments",
        component: <ShiftAssignmentsList />,
    },
    {
        path: "shift-assignments/:action/:id",
        component: <ShiftAssignment />,
    },
    {
        path: "shift-assignments/:action",
        component: <ShiftAssignment />,
    },
    {
        path: "shift-result",
        component: <ShiftResult />,
    },
];

export default scheduleRouters;

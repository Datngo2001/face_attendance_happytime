import AttendancesLayout from "layouts/Main/attendances";
import attendancesRouters from "./attendances/router";

const mainRouters = [
  {
    path: "attendances",
    component: <AttendancesLayout />,
    listChildrenRoutes: attendancesRouters,
  },
];

export default mainRouters;

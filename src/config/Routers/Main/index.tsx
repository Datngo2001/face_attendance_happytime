import ScheduleLayout from "layouts/Main/schedule";
import { AttendanceSettingsLayout } from "layouts";
import AttendancesLayout from "layouts/Main/attendances";
import CompanyLayout from "layouts/Main/company";
import EmployeesLayout from "layouts/Main/employees";
import ProfileLayout from "layouts/Main/profile";
import RequestsLayout from "layouts/Main/requests";
import WorkspaceSettingsLayout from "layouts/Main/workspace-settings";
import attendancesSettingsRouters from "./attendance-settings/router";
import attendancesRouters from "./attendances/router";
import companyRouters from "./company/router";
import empoyeesRouters from "./employees/router";
import profileRouters from "./profiles/router";
import workspaceSettingsRouters from "./workspace-settings/router";
import scheduleRouters from "./schedule/router";
import NewsLayout from "layouts/Main/news";
import newsRouters from "./news/router";

const mainRouters = [
  {
    path: "attendances",
    component: <AttendancesLayout />,
    listChildrenRoutes: attendancesRouters,
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
    path: "attendance-settings",
    component: <AttendanceSettingsLayout />,
    listChildrenRoutes: attendancesSettingsRouters,
  },
  {
    path: "profile",
    component: <ProfileLayout />,
    listChildrenRoutes: profileRouters,
  },
  {
    path: "workspace-settings",
    component: <WorkspaceSettingsLayout />,
    listChildrenRoutes: workspaceSettingsRouters,
  },
  {
    path: "schedule",
    component: <ScheduleLayout />,
    listChildrenRoutes: scheduleRouters,
  },
  {
    path: "news",
    component: <NewsLayout />,
    listChildrenRoutes: newsRouters,
  },
];

export default mainRouters;

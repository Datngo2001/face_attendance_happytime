import ChooseWorkspaces from "../../../pages/Workspaces/ChooseWorkspaces";
import CreateWorkspaces from "../../../pages/Workspaces/CreateWorkspaces";

const workspacesRouters = [
    {
        // INDEX ELEMENT
        path: "",
        component: <ChooseWorkspaces />,
    },
    {
        path: "create",
        component: <CreateWorkspaces />,
    },
];

export default workspacesRouters;

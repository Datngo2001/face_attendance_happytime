import { Info, Structure, View } from "../../../../pages/Main/Company";
import ChangeInfo from "../../../../pages/Main/Company/Change-Info";

const companyRouters = [
    {
        path: "info",
        component: <Info />,
    },
    {
        path: "change-info",
        component: <ChangeInfo />,
    },
    {
        path: "branches",
        component: <View />,
    },
    {
        path: "structure",
        component: <Structure />,
    },
];

export default companyRouters;

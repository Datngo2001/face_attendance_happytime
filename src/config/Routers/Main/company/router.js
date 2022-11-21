import { Info, Structure, View } from "../../../../pages/Main/Company";

const companyRouters = [
    {
        path: "info",
        component: <Info />,
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

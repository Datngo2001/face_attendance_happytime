import { List } from "pages/Main/News/List";
import { Categories } from "pages/Main/News/Categories";
import { Replies } from "pages/Main/News/Replies";

const newsRouters = [
    {
        path: "list",
        component: <List />,
    },
    {
        path: "categories",
        component: <Categories />,
    },
    {
        path: "replies",
        component: <Replies />,
    },
];

export default newsRouters;

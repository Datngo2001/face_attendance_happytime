import { List } from "pages/Main/News/List";
import { Categories } from "pages/Main/News/Categories";
import { Replies } from "pages/Main/News/Replies";
import { NewsDetail } from "pages/Main/News/NewsDetail";

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
    {
        path: "news-detail/:action/:id",
        component: <NewsDetail />,
    },
    {
        path: "news-detail/:action",
        component: <NewsDetail />,
    },
];

export default newsRouters;

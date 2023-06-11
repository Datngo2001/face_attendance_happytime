import { List } from "pages/Main/News/List";
import { Categories } from "pages/Main/News/Categories";
import { NewsDetail } from "pages/Main/News/NewsDetail";
import { ViewDetail } from "pages/Main/News/ViewDetail";

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
        path: "news-detail/:action/:id",
        component: <NewsDetail />,
    },
    {
        path: "news-detail/:action",
        component: <NewsDetail />,
    },
    {
        path: "view-detail/:id",
        component: <ViewDetail />,
    },
];

export default newsRouters;

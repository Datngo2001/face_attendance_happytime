import CategoryIcon from '@mui/icons-material/Category';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ReplyIcon from '@mui/icons-material/Reply';

export const dataListButtonSlideLeft = [
    {
        path: "categories",
        title: "Danh mục",
        icon: <CategoryIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2 }} />,
    },
    {
        path: "list",
        title: "Danh sách tin tức",
        icon: <NewspaperIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2 }} />,
    },
    {
        path: "replies",
        title: "Phản hồi",
        icon: <ReplyIcon sx={{ stroke: "#ffffff", strokeWidth: 1.2 }} />,
    },
];

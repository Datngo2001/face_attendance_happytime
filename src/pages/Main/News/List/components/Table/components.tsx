import { GridColumns } from "@mui/x-data-grid";
import { RowOptions } from "../RowOptions";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import dayjs from "dayjs";
import { NewsStatus } from "store/slices/Main/News/newsSlice";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';

export const getColumns = (handleUpdateClick: Function, handleDeleteClick: Function, handleViewClick: Function): GridColumns => ([
    {
        field: "title",
        headerName: "Tiêu đề",
        // width: 150,
        flex: 0.3,
        sortable: false,
        renderCell: (params) => (
            <div className="news-title-cell" style={{ opacity: params.row.status === NewsStatus.draft ? 0.5 : 1 }}>
                <div className="news-title">{params.row.title}</div>
                <div className="news-index">
                    <VisibilityIcon />
                    {params.row.total_views}
                    <ThumbUpAltIcon />
                    {params.row.total_likes}
                    <CommentIcon />
                    {params.row.total_replies}
                </div>
            </div>
        )
    },
    {
        field: "post_date",
        headerName: "Ngày tạo",
        // width: 150,
        flex: 0.4,
        sortable: false,
        renderCell: (params) => (
            <div style={{ opacity: params.row.status === NewsStatus.draft ? 0.5 : 1 }}>
                {params.row.post_date && dayjs(params.row.post_date).format("HH:mm DD/MM/YYYY")}
            </div>
        )
    },
    {
        field: "create_by.name",
        headerName: "Người phản hồi",
        // width: 150,
        flex: 0.4,
        sortable: false,
        renderCell: (params) => (
            <div style={{ opacity: params.row.status === NewsStatus.draft ? 0.5 : 1 }}>
                {params.row.create_by.name}
            </div>
        )

    },
    {
        field: "category_name",
        headerName: "Danh mục",
        // width: 150,
        flex: 0.4,
        sortable: false,
        renderCell: (params) => (
            <div style={{ opacity: params.row.status === NewsStatus.draft ? 0.5 : 1 }}>
                {params.row.category_name}
            </div>
        )
    },
    {
        field: "status",
        headerName: "Trạng thái",
        // width: 150,
        flex: 0.4,
        sortable: false,
        renderCell: (params) => {
            const opacity = params.row.status === NewsStatus.draft ? 0.5 : 1;
            switch (params.row.status) {
                case NewsStatus.draft:
                    return (<div style={{ opacity: opacity }}>Bản nháp</div>);
                case NewsStatus.on_scheduled:
                    return (<div style={{ opacity: opacity }}>Đã lên lịch</div>);
                case NewsStatus.posted:
                    return (<div style={{ opacity: opacity }}>Đã Đăng</div>)
                default:
                    break;
            }
        }
    },
    {
        field: "others",
        headerName: "",
        // width: 150,
        flex: 0.2,
        sortable: false,
        align: "center",
        renderCell: (params) => {
            return (
                <div style={{ opacity: params.row.status === NewsStatus.draft ? 0.5 : 1 }}>
                    <DropMenu
                        parent={<OptionColumn id={params.row._id} />}
                        mt="2px"
                        ml="4px"
                    >
                        <RowOptions id={params.row._id} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} handleViewClick={handleViewClick} />
                    </DropMenu>
                </div>
            );
        },
    },
]);

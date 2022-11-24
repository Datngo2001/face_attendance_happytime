import { useState } from "react";
import NoRowsOverlayCustom from "../../../../../../components/NoRowsOverlayCustom";
import PaginationCustom from "../../../../../../components/PaginationCustom";
import { ColumnName } from "../ColumnName";

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};

export const Pagination = () => {
    // STATE
    const [page, setPage] = useState(0);
    // ******************************

    return (
        <PaginationCustom
            totalPages={10}
            page={page + 1}
            onChange={(event, value) => setPage(value - 1)}
        />
    );
};

export const columns = [
    {
        key: "id",
        dataIndex: "id",
        title: "Mã nhân viên",
        width: 170,
        fixed: "left",
    },
    {
        key: "fullName",
        dataIndex: "fullName",
        title: "Nhân viên",
        width: 338,
        fixed: "left",
    },
    {
        key: "department",
        dataIndex: "department",
        title: "Phòng ban",
        width: 280,
    },
    {
        key: "test2",
        dataIndex: "department",
        title: "Tổng phép",
        width: 405,
    },
    {
        key: "test3",
        dataIndex: "department",
        title: "Phép năm nay",
        width: 305,
    },
    {
        key: "test4",
        dataIndex: "department",
        title: "Phép năm trước",
        width: 405,
    },
    // {
    //     field: "fullName",
    //     headerName: "Nhân viên",
    //     // description: "",
    //     sortable: false,
    //     width: 336,
    //     renderCell: (params) => {
    //         return <ColumnName img="" role={params.row.role} name={params.row.name} />;
    //     },
    // },
];

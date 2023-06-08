import { GridColumns } from "@mui/x-data-grid";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import RowOptions from "./components/RowOptions";

export function getColumns(handleUpdate, handleDelete): GridColumns {
    return [
        {
            flex: 1,
            field: "category_name",
            headerName: "Tên danh mục",
            sortable: false,
        },
        {
            flex: 1,
            field: "total_news",
            headerName: "Số bài viết",
            sortable: false,
        },
        {
            flex: 0.5,
            field: "others",
            headerName: "",
            align: "center",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <DropMenu
                            parent={<OptionColumn id={params.row._id} />}
                            mt="2px"
                            ml="4px"
                        >
                            <RowOptions id={params.row._id} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                        </DropMenu>
                    </>
                );
            },
        },
    ]
}
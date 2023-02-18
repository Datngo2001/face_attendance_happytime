import { GridColumns } from "@mui/x-data-grid";
import ButtonCustom from "components/ButtonCustom";
import AddIcon from '@mui/icons-material/Add';

export const getColumns = (handleAdd: any): GridColumns => {
    return [
        {
            flex: 0.5,
            field: "no",
            headerName: "STT",
            sortable: false,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "_id",
            hide: true,
        },
        {
            flex: 2,
            field: "schedule_name",
            headerName: "Loại ca làm việc",
            sortable: false,
        },
        {
            flex: 4,
            field: "description",
            headerName: "Mô tả",
            sortable: false,
        },
        {
            flex: 1,
            field: "others",
            headerName: "",
            align: "center",
            sortable: false,
            renderCell: (params) => {
                console.log("render")
                return (
                    <>
                        <ButtonCustom type={2} onClick={handleAdd(params.row._id)} icon={<AddIcon />}>Thêm mới</ButtonCustom>
                    </>
                );
            },
        },
    ]
}
import { Tooltip } from "@mui/material";
import DropMenu from "../../../../../../../components/DropMenu";
import NoRowsOverlayCustom from "../../../../../../../components/NoRowsOverlayCustom";
import { ColumnContactInfo } from "../ColumnContactInfo";
import { ColumnName } from "../ColumnName";
import { ColumnOthers } from "../ColumnOthers";
import { InnerButtonOthers } from "../ColumnOthers/components";
import "./styles.scss";

export const StatusEmployee = ({ status }) => {
    // ARROW FUNCTION
    const convertToTitle = (status) => {
        let text = "";
        switch (parseInt(status)) {
            case 1:
                text = "Đang làm việc";
                break;
            default:
                text = "Không có trạng thái";
        }
        return text;
    };
    // ********************************

    return (
        <>
            <div className={`status-emloyee__wrapper type-${status}`}>
                <p className="text">{convertToTitle(status)}</p>
            </div>
        </>
    );
};

export const StatusUsingHappyTime = ({ status }) => {
    // ARROW FUNCTION
    const convertToTitle = (status) => {
        let text = "";
        switch (parseInt(status)) {
            case 1:
                text = "Đã sử dụng";
                break;
            case 2:
                text = "Chưa sử dụng";
                break;
            default:
                text = "Không có trạng thái";
        }
        return text;
    };
    // ********************************
    return (
        <>
            <div className="status-using-time__wrapper">
                <p className="text">{convertToTitle(status)}</p>
            </div>
        </>
    );
};

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};

export const columns = [
    {
        field: "_id",
        headerName: "Mã nhân viên",
        width: 110,
        sortable: false,
        // renderCell: (params) => {
        //     return (
        //         <Tooltip title={params.row._id}>
        //             {params.row._id}
        //         </Tooltip>
        //     );
        // },
    },
    {
        field: "fullName",
        headerName: "Tên nhân viên",
        // description: "",
        sortable: false,
        width: 250,
        renderCell: (params) => {
            return (
                <ColumnName
                    img={params.row.avatar}
                    role={params.row.role}
                    name={params.row.name}
                />
            );
        },
    },
    {
        field: "username",
        headerName: "Phòng ban",
        sortable: false,
        width: 200,
        // flex: 1,
        height: 100,
    },
    {
        field: "contactInf",
        headerName: "Thông tin liên lạc",
        sortable: false,
        width: 270,
        renderCell: (params) => {
            return (
                <ColumnContactInfo
                    email={params.row.personal_mail}
                    phone={params.row.phone_number}
                />
            );
        },
    },
    {
        field: "statusEmployee",
        headerName: "Trạng thái nhân sự",
        width: 200,
        // flex: 1,
        sortable: false,
        renderCell: (params) => {
            return <StatusEmployee status={params.row.agent_status} />;
        },
    },
    {
        field: "statusUsingHappyTime",
        headerName: "Sử dụng HappyTime",
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return <StatusUsingHappyTime status={params.row.is_used_happy_time} />;
        },
    },
    {
        field: "others",
        headerName: "",
        // width: 65,
        flex: 0.5,
        align: "center",
        sortable: false,
        renderCell: (params) => {
            return (
                <>
                    <DropMenu
                        parent={<ColumnOthers id={params.row.id} />}
                        mt="2px"
                        ml="4px"
                    >
                        <InnerButtonOthers />
                    </DropMenu>
                </>
            );
        },
    },
];

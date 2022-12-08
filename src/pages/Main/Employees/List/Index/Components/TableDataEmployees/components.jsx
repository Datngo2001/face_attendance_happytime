import DropMenu from "../../../../../../../components/DropMenu";
import NoRowsOverlayCustom from "../../../../../../../components/NoRowsOverlayCustom";
import { convertIdToName } from "../../../../../../../utils/convertFunctions";
import { listRoles } from "../../../../../../../utils/ListData";
import { ColumnContactInfo } from "../ColumnContactInfo";
import { ColumnName } from "../ColumnName";
import { ColumnOthers } from "../ColumnOthers";
import { InnerButtonOthers } from "../ColumnOthers/components";
import ColumnRole from "../ColumnRole";
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
        field: "agent_code",
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
        // description: "",w
        sortable: false,
        width: 250,
        renderCell: (params) => {
            return <ColumnName img={params.row.avatar} name={params.row.name} />;
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
            return <StatusEmployee status={params.row.username} />;
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
        field: "role",
        headerName: "Vai trò",
        width: 200,
        sortable: false,
        headerAlign: "center",
        align: "center",
        renderCell: (params) => {
            return (
                <ColumnRole
                    role={convertIdToName({
                        id: params.row.role,
                        list: listRoles,
                    })}
                />
            );
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

import DropMenu from "../../../../../../../components/DropMenu";
import NoRowsOverlayCustom from "../../../../../../../components/NoRowsOverlayCustom";
import { convertIdToName } from "../../../../../../../utils/convertFunctions";
import {
  listRoles,
  listStatusEmployees,
} from "../../../../../../../utils/ListData";
import { ColumnContactInfo } from "../ColumnContactInfo";
import { ColumnName } from "../ColumnName";
import { ColumnOthers } from "../ColumnOthers";
import { InnerButtonOthers } from "../ColumnOthers/components";
import ColumnRole from "../ColumnRole";
import "./styles.scss";

export const StatusEmployee = ({ status }) => {
  // ARROW FUNCTION
  // ********************************

  return (
    <>
      <div className={`status-emloyee__wrapper type-${status}`}>
        <p className="text">{status}</p>
      </div>
    </>
  );
};

export const StatusUsingHappyTime = ({ status }) => {
  // ARROW FUNCTION
  const convertToTitle = (status) => {
    let text = "";
    switch (status) {
      case true:
        text = "Đã sử dụng";
        break;
      case false:
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
    flex: 0.6,
    field: "agent_code",
    headerName: "Mã nhân viên",
    sortable: false,
  },
  {
    flex: 1,
    field: "fullName",
    headerName: "Tên nhân viên",
    sortable: false,
    renderCell: (params) => {
      return <ColumnName img={params.row.avatar} name={params.row.name} />;
    },
  },
  {
    flex: 1,
    field: "username",
    headerName: "Phòng ban",
    sortable: false,
    height: 100,
  },
  {
    flex: 2,
    field: "contactInf",
    headerName: "Thông tin liên lạc",
    sortable: false,
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
    flex: 1,
    field: "statusEmployee",
    headerName: "Trạng thái nhân sự",
    sortable: false,
    renderCell: (params) => {
      return (
        <StatusEmployee
          status={convertIdToName({
            id: params.row.agent_status,
            list: listStatusEmployees,
          })}
        />
      );
    },
  },
  {
    flex: 1,
    field: "statusUsingHappyTime",
    headerName: "Sử dụng HappyTime",
    sortable: false,
    renderCell: (params) => {
      return <StatusUsingHappyTime status={params.row.is_used_happy_time} />;
    },
  },
  {
    flex: 1,
    field: "role",
    headerName: "Vai trò",
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
    flex: 0.5,
    field: "others",
    headerName: "",
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

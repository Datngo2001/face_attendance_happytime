import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import { ColumnContactInfo } from "../ColumnContactInfo";
import { ColumnName } from "../ColumnName";
import ColumnRole from "../ColumnRole";
import "./styles.scss";
import { convertIdToName } from "utils/convertFunctions";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import { RowOptions } from "../RowOptions";
import { GridColumns } from "@mui/x-data-grid";
import { roleOptions, statusEmployeesOption } from "store/slices/Main/Employees/employeesSlice";

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

export const columns: GridColumns = [
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
            list: statusEmployeesOption,
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
            list: roleOptions,
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
            parent={<OptionColumn id={params.row.id} />}
            mt="2px"
            ml="4px"
          >
            <RowOptions id={params.row._id} />
          </DropMenu>
        </>
      );
    },
  },
];

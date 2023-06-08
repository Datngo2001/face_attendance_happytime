import "./styles.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import { InnerButtonAdd } from "../InnerButtonAdd";
import { Tooltip } from "@mui/material";
import { toastify } from "utils";
import { useAppSelector } from "hooks/useAppSelector";
import DropMenu from "components/DropMenu";
import ButtonCustom from "components/ButtonCustom";
import SelectCustom from "components/SelectCustom";
import InputCustom from "components/InputCustom";
import { createPositionSelectOptions } from "utils/departmentUtil";
import TreeViewSelectBox from "components/TreeViewSelectBox";
import { roleOptions, statusEmployeesOption, statusUsingHappyTimeOptions } from "store/slices/Main/Employees/employeesSlice";

type Props = {
  control: any
  setValue: any
}

export const IndexControlPanel: React.FC<Props> = ({ control, setValue }) => {
  const { departmentTrees } = useAppSelector((state) => state.departments);

  const handleExport = () => { };
  const handleSendInvitation = () => {
    toastify({ mess: "Gửi lời mời thành công", type: "success" });
  };

  return (
    <>
      <div className="index__control-panel">
        <div className="index__header">
          <h2 className="content-title">Danh sách nhân viên</h2>
          <div className="actions">
            <DropMenu
              parent={
                <ButtonCustom
                  className="button btn-add"
                  icon={<AddRoundedIcon />}
                  width="124px"
                  height="32px"
                >
                  Thêm mới
                </ButtonCustom>
              }
              mt="12px"
            >
              <InnerButtonAdd />
            </DropMenu>
            <Tooltip
              arrow
              title="Export danh sách nhân viên bằng Excel"
              placement="bottom-end"
            >
              <span className="wrapper">
                <ButtonCustom
                  className="button"
                  onClick={handleExport}
                  icon={<DriveFileMoveRoundedIcon />}
                  width="124px"
                  height="32px"
                >
                  EXPORT
                </ButtonCustom>
              </span>
            </Tooltip>
          </div>
        </div>
        <form className="index__actions">
          {/* <SelectCustom
            name=""
            className="input-item"
            control={control}
            options={listStatusActive}
          /> */}

          <InputCustom
            name="name"
            iconRight={<SearchRoundedIcon />}
            className="input-item flex-basic-25"
            placeholder="Tên nhân viên"
            control={control}
          />
          <InputCustom
            name="agent_code"
            iconRight={<SearchRoundedIcon />}
            className="input-item flex-basic-25"
            placeholder="Mã nhân viên"
            control={control}
          />

          <InputCustom
            name="personal_mail"
            iconRight={<SearchRoundedIcon />}
            className="input-item flex-basic-25"
            placeholder="Email nhân viên"
            control={control}
          />

          <InputCustom
            name="phone_number"
            iconRight={<SearchRoundedIcon />}
            className="input-item flex-basic-25"
            placeholder="Số điện thoại nhân viên"
            control={control}
          />

          <SelectCustom
            name="agent_status"
            className="input-item"
            control={control}
            placeholder="Trạng thái nhân sự"
            options={statusEmployeesOption}
          />

          <SelectCustom
            name="role"
            className="input-item"
            control={control}
            placeholder="Vai trò"
            options={roleOptions}
          />

          {/* <SelectCustom
            name="agent_position"
            className="input-item"
            control={control}
            placeholder="Phòng ban vị trí công việc"
            options={listRoles}
          /> */}

          <TreeViewSelectBox
            className="input-item"
            required={true}
            placeholder="Phòng ban vị trí công việc"
            setValue={setValue}
            name="agent_position"
            control={control}
            options={departmentTrees ? createPositionSelectOptions(departmentTrees) : []} />

          {/* <SelectCustom
            name="typeEmployee"
            className="input-item"
            control={control}
            placeholder="Loại hình nhân sự"
            options={listTypeEmployees}
          /> */}

          <SelectCustom
            name="is_used_happy_time"
            className="input-item flex-basic-25"
            control={control}
            placeholder="Trạng thái sử dụng HappyTime"
            options={statusUsingHappyTimeOptions}
          />

          {/* {listIdInvitation.length > 0 && (
            <DropMenu
              parent={
                <ButtonCustom
                  className="button-manipulation"
                  width="110px"
                  height="39px"
                  type={2}
                  icon={<HandymanRoundedIcon />}
                >
                  Thao tác
                </ButtonCustom>
              }
              mt="10px"
            >
              <InnerButtonManipulation onClick={handleSendInvitation} />
            </DropMenu>
          )} */}
        </form>
      </div>
    </>
  );
};

import "./styles.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import { InnerButtonAdd } from "../InnerButtonAdd";
import { Tooltip } from "@mui/material";
import { InnerButtonManipulation } from "./components";
import useThrottle from "hooks/useThrottle";
import { toastify } from "utils";
import { extraReducersGetListEmployees } from "store/slices/Main/Employees/actions/extraReducers";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import DropMenu from "components/DropMenu";
import ButtonCustom from "components/ButtonCustom";
import SelectCustom from "components/SelectCustom";
import { listRoles, listStatusActive, listStatusEmployees, listStatusUsingHappyTime, listTypeEmployees } from "utils/ListData";
import InputCustom from "components/InputCustom";

export const IndexControlPanel = () => {
  // STATE
  const { control, watch } = useForm({});
  const { listIdInvitation } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch();
  // ******************************

  // HOOK EFFECT
  useEffect(() => {
    const subscription = watch((value) => handleSearch(value));
    return () => subscription.unsubscribe();
  }, [watch]);
  // ******************************

  // ARROW FUNCTION
  const handleExport = () => { };
  const handleSendInvitation = () => {
    console.log("List id", listIdInvitation);
    toastify({ mess: "Gửi lời mời thành công", type: "success" });
  };
  const handleSearch = useThrottle((query) => {
    console.log(query);
    dispatch(
      extraReducersGetListEmployees({
        page: 1,
        size: process.env.REACT_APP_PAGE_SIZE,
      })
    );
  }, 500);
  // ******************************

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
          <SelectCustom
            name="statusActive"
            className="input-item"
            control={control}
            defaultValue={1}
            options={listStatusActive}
          />
          <SelectCustom
            name="statusEmployee"
            className="input-item"
            control={control}
            placeholder="Trạng thái nhân sự"
            options={listStatusEmployees}
          />
          <InputCustom
            name="searchData"
            iconRight={<SearchRoundedIcon />}
            className="input-item flex-basic-25"
            placeholder="Tên, email, số điện thoại, mã nhân viên"
            control={control}
          />
          <SelectCustom
            name="role"
            className="input-item"
            control={control}
            placeholder="Vai trò"
            options={listRoles}
          />
          <SelectCustom
            name="jobPositionDepartment"
            className="input-item"
            control={control}
            placeholder="Phòng ban vị trí công việc"
            options={listRoles}
          />
          <SelectCustom
            name="typeEmployee"
            className="input-item"
            control={control}
            placeholder="Loại hình nhân sự"
            options={listTypeEmployees}
          />
          <SelectCustom
            name="statusUsingHappyTime"
            className="input-item flex-basic-25"
            control={control}
            placeholder="Trạng thái sử dụng HappyTime"
            options={listStatusUsingHappyTime}
          />
          {listIdInvitation.length > 0 && (
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
          )}
        </form>
      </div>
    </>
  );
};

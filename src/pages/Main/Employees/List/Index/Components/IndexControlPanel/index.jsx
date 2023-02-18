import "./styles.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ButtonCustom from "../../../../../../../components/ButtonCustom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import { InnerButtonAdd } from "../../Components/InnerButtonAdd";
import { Tooltip } from "@mui/material";
import InputCustom from "../../../../../../../components/InputCustom";
import DropMenu from "../../../../../../../components/DropMenu";
import { InnerButtonManipulation } from "./components";
import { useDispatch, useSelector } from "react-redux";
import SelectCustom from "../../../../../../../components/SelectCustom";
import { toastify } from "../../../../../../../utils";
import {
  listRoles,
  listStatusActive,
  listStatusEmployees,
  listStatusUsingHappyTime,
  listTypeEmployees,
} from "../../../../../../../utils/ListData";
import useThrottle from "../../../../../../../hooks/useThrottle";
import { extraReducersGetListEmployees } from "../../../../../../../store/slices/Main/Employees/actions/extraReducers";

export const IndexControlPanel = () => {
  // STATE
  const { register, watch } = useForm({});
  const { listIdInvitation } = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  // ******************************

  // HOOK EFFECT
  useEffect(() => {
    const subscription = watch((value) => handleSearch(value));
    return () => subscription.unsubscribe();
  }, [watch]);
  // ******************************

  // ARROW FUNCTION
  const handleExport = () => {};
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
            register={register}
            defaultValue={1}
            options={listStatusActive}
          />
          <SelectCustom
            name="statusEmployee"
            className="input-item"
            register={register}
            placeholder="Trạng thái nhân sự"
            options={listStatusEmployees}
          />
          <InputCustom
            id="searchData"
            name="searchData"
            iconRight={<SearchRoundedIcon />}
            className="input-item flex-basic-25"
            placeholder="Tên, email, số điện thoại, mã nhân viên"
            register={register}
          />
          <SelectCustom
            name="role"
            className="input-item"
            register={register}
            placeholder="Vai trò"
            options={listRoles}
          />
          <SelectCustom
            name="jobPositionDepartment"
            className="input-item"
            register={register}
            placeholder="Phòng ban vị trí công việc"
            options={listRoles}
          />
          <SelectCustom
            name="typeEmployee"
            className="input-item"
            register={register}
            placeholder="Loại hình nhân sự"
            options={listTypeEmployees}
          />
          <SelectCustom
            name="statusUsingHappyTime"
            className="input-item flex-basic-25"
            register={register}
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

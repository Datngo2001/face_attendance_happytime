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
import { useSelector } from "react-redux";
import SelectCustom from "../../../../../../../components/SelectCustom";
import { toastify } from "../../../../../../../utils";
import { listRoles, listStatusActive, listStatusEmployees, listStatusUsingHappyTime, listTypeEmployees } from "../../../../../../../utils/ListData";

export const IndexControlPanel = () => {
    // STATE
    const { register, handleSubmit, watch } = useForm({});
    const { listIdInvitation } = useSelector((state) => state.employees);
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        console.log(watch());
    }, [watch()]);
    // ******************************

    // ARROW FUNCTION
    const handleExport = () => {};
    const handleSendInvitation = () => {
        console.log("List id", listIdInvitation);
        toastify({ mess: "Gửi lời mời thành công", type: "success" });
    };
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
                <form
                    className="index__actions"
                    onSubmit={handleSubmit((data) => console.log(data))}
                >
                    <SelectCustom
                        id="statusActive"
                        className="input-item"
                        register={register}
                        defaultValue={1}
                        options={listStatusActive}
                    />
                    <SelectCustom
                        id="statusEmployee"
                        className="input-item"
                        register={register}
                        placeholder="Trạng thái nhân sự"
                        options={listStatusEmployees}
                    />
                    <InputCustom
                        id="searchData"
                        iconRight={<SearchRoundedIcon />}
                        className="input-item flex-basic-25"
                        placeholder="Tên, email, số điện thoại, mã nhân viên"
                        register={register}
                    />
                    <SelectCustom
                        id="role"
                        className="input-item"
                        register={register}
                        placeholder="Vai trò"
                        options={listRoles}
                    />
                    <SelectCustom
                        id="jobPositionDepartment"
                        className="input-item"
                        register={register}
                        placeholder="Phòng ban vị trí công việc"
                        options={listRoles}
                    />
                    <SelectCustom
                        id="typeEmployee"
                        className="input-item"
                        register={register}
                        placeholder="Loại hình nhân sự"
                        options={listTypeEmployees}
                    />
                    <SelectCustom
                        id="statusUsingHappyTime"
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

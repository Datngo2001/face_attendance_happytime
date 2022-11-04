import "./styles.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
    checkDuplicateElement,
    listEmptyFields,
    listRoles,
    listStatusActive,
    listStatusEmployees,
    listStatusUsingHappyTime,
    listTypeEmployees,
} from "./data_functions";
import MultiSelect from "../../../../../../../components/MultiSelect";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ButtonCustom from "../../../../../../../components/ButtonCustom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import { InnerButtonAdd } from "../../Components/InnerButtonAdd";
import { Tooltip } from "@mui/material";
import { SelectCustom } from "../../../../../../../components/SelectCustom";
import InputCustom from "../../../../../../../components/InputCustom";
import DropMenu from "../../../../../../../components/DropMenu";

export const IndexControlPanel = () => {
    // STATE
    const { register, handleSubmit, watch } = useForm({});
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        console.log(watch());
        console.log(checkDuplicateElement(watch().emptyFields));
    }, [watch()]);
    // ******************************

    // ARROW FUNCTION
    const handleExport = () => {};
    // ******************************
    return (
        <>
            <div className="index__control-panel">
                <div className="index__header">
                    <h2 className="title">Danh sách nhân viên</h2>
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
                    <MultiSelect
                        id="emptyFields"
                        className="input-item"
                        register={register}
                        placeholder="Các trường bị thiếu"
                        options={listEmptyFields}
                    />
                </form>
            </div>
        </>
    );
};

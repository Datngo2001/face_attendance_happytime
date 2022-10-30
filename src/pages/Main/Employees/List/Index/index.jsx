import ButtonCustom from "../../../../../components/ButtonCustom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import "./styles.scss";
import { Tooltip } from "@mui/material";
import DropDown from "../../../../../components/DropDown";
import { useEffect, useState } from "react";
import { InnerButtonAdd } from "./components";
import { SelectCustom } from "../../../../../components/SelectCustom";
import { useForm } from "react-hook-form";
import {
    listEmptyFields,
    listRoles,
    listStatusActive,
    listStatusEmployees,
    listStatusUsingHappyTime,
    listTypeEmployees,
} from "./data";
import InputCustom from "../../../../../components/InputCustom";
import MultiSelect from "../../../../../components/MultiSelect";

const Index = () => {
    // STATE
    const [open, setOpen] = useState(false);

    const { register, handleSubmit, watch } = useForm({});
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        console.log(watch().emptyFields);
    }, [watch()]);
    // ******************************

    // ARROW FUNCTION
    const handleOpenDropMenu = () => {
        setOpen(!open);
    };

    const handleExport = () => {};
    // ******************************
    return (
        <>
            <div className="index__wrapper">
                <div className="index__control-panel">
                    <div className="index__header">
                        <h2 className="title">Danh sách nhân viên</h2>
                        <div className="actions">
                            <ButtonCustom
                                className="button btn-add"
                                onClick={handleOpenDropMenu}
                                icon={<AddRoundedIcon />}
                                width="124px"
                                height="32px"
                            >
                                THÊM MỚI
                                {open && (
                                    <DropDown
                                        state={open}
                                        setState={setOpen}
                                        height="auto"
                                        width="auto"
                                        top="148px"
                                        right="188px"
                                    >
                                        <InnerButtonAdd />
                                    </DropDown>
                                )}
                            </ButtonCustom>
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
                <div className="index__table"></div>
            </div>
        </>
    );
};

export default Index;

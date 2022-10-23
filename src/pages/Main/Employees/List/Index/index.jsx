import ButtonCustom from "../../../../../components/ButtonCustom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import "./styles.scss";
import { Tooltip } from "@mui/material";
import DropDown from "../../../../../components/DropDown";
import { useState } from "react";
import { InnerButtonAdd } from "./components";

const Index = () => {
    // STATE
    const [open, setOpen] = useState(false);
    // ******************************

    // ARROW FUNCTION
    const handleOpenDropMenu = () => {
        setOpen(!open);
    };
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
                                        top="42px"
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
                    <div className="index__actions"></div>
                </div>
                <div className="index__table"></div>
            </div>
        </>
    );
};

export default Index;

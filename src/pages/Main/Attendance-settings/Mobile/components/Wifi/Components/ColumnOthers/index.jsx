import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import "./styles.scss";
import { useState } from "react";
import DropMenu from "../../../../../../../../components/DropMenu";
import ModalCustom from "../../../../../../../../components/ModalCustom";
import { WifiAddingForm } from "../../../../../../../../forms/Main/AttendancesSettings";

export const ColumnOthers = ({ code }) => {
    const [open, setOpen] = useState(false);

    // ARROW FUNCTIONS
    // ****************************

    return (
        <>
            <div className="attendance-settings--mobile-wifi__table-column-others">
                <span className="icon">
                    <DropMenu parent={<MoreHorizRoundedIcon />} mt="2px" ml="4px">
                        <InnerButtonOthers code={code} setOpen={setOpen} />
                    </DropMenu>
                </span>
                <ModalCustom
                    idTarget={`index-${code}`}
                    titleHeader={
                        <span
                            style={{
                                color: "#212f3f",
                                fontSize: "20px",
                                textTransform: "uppercase",
                            }}
                        >
                            Chỉnh sửa thông tin IP Wi-Fi
                        </span>
                    }
                    state={open}
                    setState={setOpen}
                    footer={false}
                >
                    <WifiAddingForm method="update" setOpen={setOpen} />
                </ModalCustom>
            </div>
        </>
    );
};

export const InnerButtonOthers = ({ code, setOpen }) => {
    // ARROW FUNCTION
    // ****************************

    return (
        <>
            <div className="attendance-settings--mobile-wifi__table-column-others--inner-button-others">
                <div className="btn" id={`index-${code}`} onClick={() => setOpen(true)}>
                    <span className="icon">
                        <BorderColorRoundedIcon />
                    </span>
                    Chỉnh sửa thông tin IP Wi-Fi
                </div>
            </div>
        </>
    );
};

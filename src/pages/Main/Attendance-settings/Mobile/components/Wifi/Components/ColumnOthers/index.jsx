import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import "./styles.scss";
import { useState } from "react";
import DropMenu from "../../../../../../../../components/DropMenu";
import ModalCustom from "../../../../../../../../components/ModalCustom";
import { WifiAddingForm } from "../../../../../../../../forms/Main/AttendancesSettings";
import { useForm } from "react-hook-form";

export const ColumnOthers = ({ stt }) => {
    const [open, setOpen] = useState(false);

    const { register, setValue, handleSubmit } = useForm({});

    // ARROW FUNCTIONS
    const handleOnSubmit = () => {
        handleSubmit();
    };
    // ****************************

    return (
        <>
            <div className="attendance-settings--mobile-wifi__table-column-others">
                <span className="icon">
                    <DropMenu parent={<MoreHorizRoundedIcon />} mt="2px" ml="4px">
                        <InnerButtonOthers stt={stt} setOpen={setOpen} />
                    </DropMenu>
                </span>
                <ModalCustom
                    idTarget={`index-${stt}`}
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
                >
                    <WifiAddingForm />
                </ModalCustom>
            </div>
        </>
    );
};

export const InnerButtonOthers = ({ stt, setOpen }) => {
    // ARROW FUNCTION
    // ****************************

    return (
        <>
            <div className="attendance-settings--mobile-wifi__table-column-others--inner-button-others">
                <div className="btn" id={`index-${stt}`} onClick={() => setOpen(true)}>
                    <span className="icon">
                        <BorderColorRoundedIcon />
                    </span>
                    Chỉnh sửa thông tin IP Wi-Fi
                </div>
            </div>
        </>
    );
};

import { useState } from "react";
import ButtonSwitchCustom from "../../../../../../../../components/ButtonSwitchCustom";
import ModalCustom from "../../../../../../../../components/ModalCustom";
import "./styles.scss";

const ColumnActiveStatus = ({ stt }) => {
    // HOOK STATE
    const [activeStatus, setActiveStatus] = useState(true);
    // ****************************

    // ARROW FUNCTIONS
    const handleChangeStatus = () => {
        setActiveStatus(!activeStatus);
    };
    // ****************************
    return (
        <>
            <div className="attendance-settings--mobile-wifi__table-column-active-status">
                <ButtonSwitchCustom id={`${stt}_activeStatus`} checked={activeStatus} />
                <ModalCustom
                    idTarget={`${stt}_activeStatus`}
                    titleHeader="Trạng thái IP Wi-Fi"
                    callback={handleChangeStatus}
                >
                    Bạn có chắc chắn muốn thay đổi trạng thái IP Wi-Fi?
                </ModalCustom>
            </div>
        </>
    );
};

export default ColumnActiveStatus;

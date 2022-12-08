import InputCustom from "../../../../../../../../components/InputCustom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { listStatusActive } from "../../../../../../../../utils/ListData";
import SelectCustom from "../../../../../../../../components/SelectCustom";

const ControlPanel = () => {
    // REACT HOOK FORM
    const { register, watch } = useForm({});
    // ****************************

    // HOOk EFFECT
    useEffect(() => {
        console.log("data", watch());
    }, [watch()]);
    // ****************************

    return (
        <>
            <div className="attendance-settings--mobile-wifi__control-panel">
                <InputCustom
                    id="dataSearch"
                    width="100%"
                    register={register}
                    placeholder="Tên IP Wi-Fi bạn muốn tìm"
                    iconRight={<SearchRoundedIcon />}
                />
                <SelectCustom
                    id="activeStatus"
                    className="select-item"
                    register={register}
                    width="35%"
                    placeholder="Trạng thái hoạt động"
                    options={listStatusActive}
                />
            </div>
        </>
    );
};

export default ControlPanel;

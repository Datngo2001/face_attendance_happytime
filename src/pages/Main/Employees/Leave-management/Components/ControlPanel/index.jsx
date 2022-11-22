import InputCustom from "../../../../../../components/InputCustom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./styles.scss";
import SelectCustom from "../../../../../../components/SelectCustom";
import { departmentList, positionList } from "./data";

const ControlPanel = ({ register }) => {
    return (
        <>
            <div className="leave-management--control-panel__wrapper">
                <div className="content-title">Quản lý phép</div>
                <div className="control-panel">
                    <InputCustom
                        id="searchData"
                        iconRight={<SearchOutlinedIcon />}
                        width="25%"
                        register={register}
                        placeholder="Tên, mã nhân viên, số điện thoại"
                    />
                    <SelectCustom
                        id="department"
                        register={register}
                        width="20%"
                        options={departmentList}
                        placeholder="Chọn phòng ban"
                    />
                    <SelectCustom
                        id="position"
                        register={register}
                        width="20%"
                        options={positionList}
                        placeholder="Chọn vị trí"
                    />
                </div>
            </div>
        </>
    );
};

export default ControlPanel;

import ButtonCustom from "../../../../../../components/ButtonCustom";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import InputCustom from "../../../../../../components/InputCustom";

const ControlPanel = ({ register }) => {
    return (
        <>
            <div className="attendances--summary--control-panel__wrapper">
                <div className="attendances--summary--control-panel__header">
                    <div className="content-title">Bảng công</div>
                    <ButtonCustom
                        width="160px"
                        height="40px"
                        type={2}
                        icon={<ReplayRoundedIcon />}
                    >
                        Cập nhật kết quả
                    </ButtonCustom>
                </div>
                <div className="attendances--summary--control-panel__body">
                    <InputCustom
                        id="searchData"
                        register={register}
                        placeholder="Nhập tên nhân viên, mã nhân viên"
                        iconRight={<SearchRoundedIcon />}
                    />
                </div>
            </div>
        </>
    );
};

export default ControlPanel;

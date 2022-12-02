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
                <div className="attendances--summary--control-panel__footer">
                    <div className="description-item">
                        <span className="description-item__icon green"></span>
                        <p className="description-item__title">Chấm công đúng giờ</p>
                    </div>
                    <div className="description-item">
                        <span className="description-item__icon yellow"></span>
                        <p className="description-item__title">
                            Đi muộn / Về sớm / Quên Check out
                        </p>
                    </div>
                    <div className="description-item">
                        <span className="description-item__icon gray"></span>
                        <p className="description-item__title">Không chấm công</p>
                    </div>
                    <div className="description-item">
                        <span className="description-item__icon blue-1"></span>
                        <p className="description-item__title">Có đơn từ</p>
                    </div>
                    <div className="description-item">
                        <span className="description-item__icon blue-2"></span>
                        <p className="description-item__title">Nghỉ lễ</p>
                    </div>
                    <div className="description-item">
                        <span className="description-item__icon red"></span>
                        <p className="description-item__title">Có lỗi</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ControlPanel;

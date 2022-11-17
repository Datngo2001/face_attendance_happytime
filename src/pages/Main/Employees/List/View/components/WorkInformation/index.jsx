import "./styles.scss";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";

const WorkInformation = ({
    jobPosition,
    department,
    typeEmployee,
    manageDirectly,
    statusEmployee,
}) => {
    // HOOK EFFECT
    // ****************************

    // ARROW FUNCTIONS
    const convertStatusEmployee = (status) => {
        switch (status) {
            case 1:
                return <p className="status-employee--working">Đang làm việc</p>;
            default:
                return <p className="not-yet-update">Chưa cập nhật</p>;
        }
    };

    const handleViewHistory = () => {
        alert("Lịch sử chuyển đổi");
    };
    // ****************************

    return (
        <>
            <div className="view-work-information__wrapper">
                <div className="title">
                    <BusinessCenterRoundedIcon />
                    Thông tin công việc
                </div>
                <div className="content divider-bottom">
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Vị trí công việc</p>
                            <p className="label">Phòng ban</p>
                            <p className="label">Quản lý trực tiếp</p>
                            <p className="h-52">Loại hình nhân sự</p>
                            <p className="h-52">Trạng thái nhân sự</p>
                            <p className="label">Chi nhánh làm việc</p>
                            <p className="label">Trạng thái sử dụng HappyTime</p>
                            <p className="label">Chấm công</p>
                        </div>
                        <div className="col__data">
                            <p className="data">{jobPosition}</p>
                            <p className="data">{department}</p>
                            <p className={`data ${!manageDirectly && "not-yet-update"}`}>
                                {manageDirectly || "Chưa cập nhật"}
                            </p>
                            <div className="h-52">
                                <p className={`${!typeEmployee && "not-yet-update"}`}>
                                    {typeEmployee || "Chưa cập nhật"}
                                </p>
                                <span className="btn" onClick={handleViewHistory}>
                                    <HistoryRoundedIcon />
                                    Lịch sử chuyển đổi
                                </span>
                            </div>
                            <div className="h-52">
                                {convertStatusEmployee(statusEmployee)}
                                <span className="btn" onClick={handleViewHistory}>
                                    <HistoryRoundedIcon />
                                    Lịch sử chuyển đổi
                                </span>
                            </div>
                            <p className={`data ${!typeEmployee && "not-yet-update"}`}>
                                {typeEmployee || "Chưa cập nhật"}
                            </p>
                            <p className={`data ${!typeEmployee && "not-yet-update"}`}>
                                {typeEmployee || "Chưa cập nhật"}
                            </p>
                            <p className={`data ${!typeEmployee && "not-yet-update"}`}>
                                {typeEmployee || "Chưa cập nhật"}
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Ngày bắt đầu đi làm</p>
                            <p className="label">Ngày bắt đầu chính thức</p>
                            <p className="label">Ngày nghỉ việc</p>
                            <p className="label">Mã chấm công</p>
                            <p className="label">Device ID</p>
                            <p className="label">Số phép năm nay</p>
                            <p className="label">Số phép năm trước</p>
                        </div>
                        <div className="col__data">
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data">0</p>
                            <p className="data">0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkInformation;

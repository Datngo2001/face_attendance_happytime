import "./styles.scss";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";

const Profile = ({ phoneNumber, email, emailCompany }) => {
    return (
        <>
            <div className="view-profile__wrapper">
                <p className="title">
                    <AccountBoxRoundedIcon />
                    Thông tin cá nhân
                </p>
                <div className="content divider-bottom">
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Giới tính</p>
                            <p className="label">Ngày sinh</p>
                            <p className="label">Số điện thoại</p>
                            <p className="label">Email cá nhân</p>
                            <p className="label">Email công ty</p>
                            <p className="label">Địa chỉ tạm trú</p>
                            <p className="label">Tình trạng hôn nhân</p>
                        </div>
                        <div className="col__data">
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data">{phoneNumber}</p>
                            <p className="data">{email}</p>
                            <p className="data">{emailCompany}</p>
                            <p className="data"></p>
                            <p className="data"></p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Mã số thuế cá nhân</p>
                            <p className="label">Số CCCD/CMND/Hộ chiếu</p>
                            <p className="label">Nơi cấp</p>
                            <p className="label">Ngày cấp</p>
                            <p className="label">Địa chỉ thường chú</p>
                            <p className="label">Học vấn</p>
                            <p className="label">Trường học</p>
                            <p className="label">Chuyên ngành</p>
                            <p className="label">Năm tốt nghiệp</p>
                        </div>
                        <div className="col__data">
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                            <p className="data"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

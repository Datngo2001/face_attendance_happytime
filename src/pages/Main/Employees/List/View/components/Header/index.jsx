import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ButtonCustom from "../../../../../../../components/ButtonCustom";
import "./styles.scss";

const Header = ({ avatar, name, id }) => {
    return (
        <>
            <div className="view-header__wrapper divider-bottom">
                <h3 className="view-header__wrapper-title">Chi tiết nhân viên</h3>
                <div className="view-header__wrapper-body">
                    <div className="avatar">
                        {avatar ? (
                            <img className="img" src={avatar} alt="" />
                        ) : (
                            <span className="icon">
                                <PersonRoundedIcon />
                            </span>
                        )}
                    </div>
                    <div className="name-and-id">
                        <p className="name">{name || "Tên nhân viên"}</p>
                        <p className="id">Mã nhân viên: {id}</p>
                    </div>
                    <div className="action">
                        <ButtonCustom className="btn-update" width="128px" height="40px">
                            Chỉnh sửa
                        </ButtonCustom>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;

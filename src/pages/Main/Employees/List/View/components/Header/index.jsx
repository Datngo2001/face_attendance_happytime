import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ButtonCustom from "../../../../../../../components/ButtonCustom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const Header = ({ avatar, name, id, agent_code }) => {
  // HOOK ROUTER
  const navigate = useNavigate();
  // ****************************

  // ARROW FUNCTIONS
  const handleOnClick = () => {
    navigate(`../list/update/${id}`);
  };
  // ****************************
  return (
    <>
      <div className="view-header__wrapper divider-bottom">
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
            <p className="id">Mã nhân viên: {agent_code}</p>
          </div>
          <div className="action">
            <ButtonCustom
              className="btn-update"
              icon={<EditRoundedIcon />}
              onClick={handleOnClick}
              width="128px"
              height="40px"
            >
              Chỉnh sửa
            </ButtonCustom>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

import "./styles.scss";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { Link } from "react-router-dom";

export const InnerButtonOthers = () => {
    return (
        <>
            <div className="inner-button-others__wrapper">
                <Link to={""} className="inner-button-others__item">
                    <span className="icon">
                        <ErrorOutlineRoundedIcon />
                    </span>
                    <p className="title">Xem chi tiết nhân viên</p>
                </Link>
                <Link to={""} className="inner-button-others__item">
                    <span className="icon">
                        <BorderColorRoundedIcon />
                    </span>
                    <p className="title">Chỉnh sửa thông tin</p>
                </Link>
            </div>
        </>
    );
};

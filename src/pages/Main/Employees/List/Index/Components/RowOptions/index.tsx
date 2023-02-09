import "./styles.scss";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import { Link } from "react-router-dom";

export const RowOptions: React.FC = () => {
    return (
        <>
            <div className="row-options__wrapper">
                <Link to="../list/view" className="row-options__item">
                    <span className="icon">
                        <ErrorOutlineRoundedIcon />
                    </span>
                    <p className="title">Xem chi tiết nhân viên</p>
                </Link>
                <Link to="../list/update" className="row-options__item">
                    <span className="icon">
                        <BorderColorRoundedIcon />
                    </span>
                    <p className="title">Chỉnh sửa thông tin</p>
                </Link>
            </div>
        </>
    );
};

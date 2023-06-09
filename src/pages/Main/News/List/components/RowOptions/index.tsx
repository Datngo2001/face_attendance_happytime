import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import "./styles.scss";

export const RowOptions = ({ id, handleUpdateClick, handleDeleteClick }) => {
    return (
        <>
            <div className="row-options__wrapper">
                <div className="row-options__item" onClick={() => handleUpdateClick(id)} >
                    <span className="icon">
                        <BorderColorRoundedIcon />
                    </span>
                    <p className="title">Chỉnh sửa thông tin bài viết</p>
                </div>
                <div className="row-options__item" onClick={() => handleDeleteClick(id)}>
                    <span className="icon">
                        <DeleteIcon />
                    </span>
                    <p className="title">Xóa thông tin bài viết</p>
                </div>
            </div>
        </>
    );
};
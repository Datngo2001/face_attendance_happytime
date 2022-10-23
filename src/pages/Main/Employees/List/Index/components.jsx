import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./styles.scss";

export const InnerButtonAdd = () => {
    return (
        <>
            <ul className="inner-button-add__wrapper">
                <li className="item">
                    <p className="title">
                        <AddRoundedIcon />
                        Thêm thủ công
                    </p>
                </li>
                <li className="item">
                    <p className="title">
                        <DriveFolderUploadIcon />
                        Tải tệp lên
                    </p>
                </li>
            </ul>
        </>
    );
};

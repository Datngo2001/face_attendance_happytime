import AddRoundedIcon from "@mui/icons-material/AddRounded";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export const InnerButtonAdd = () => {
    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ****************************

    // ARROW FUNCTIONS
    const handleOnClick = () => {
        navigate("../list/create");
    };
    // ****************************
    return (
        <>
            <ul className="inner-button-add__wrapper">
                <li className="item" onClick={handleOnClick}>
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

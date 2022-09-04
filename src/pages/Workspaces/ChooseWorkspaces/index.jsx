import { Divider } from "@mui/material";
import { ButtonWorkspace } from "./components";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

const ChooseWorkspaces = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/workspaces/create");
    }
    return (
        <>
            <div className="choose-workspaces__wrapper">
                <h2 className="choose-workspaces__title">Chọn workspace của bạn</h2>
                <div className="choose-workspaces__list-workspaces">
                    <ButtonWorkspace username="test" />
                    <ButtonWorkspace username="test" />
                </div>
                <Divider className="choose-workspaces__divider" />
                <div className="choose-workspaces__create">
                    <div>
                        <AddCircleOutlinedIcon className="icon" />
                        <p className="text" onClick={handleOnClick}>Tạo workspace mới</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseWorkspaces;

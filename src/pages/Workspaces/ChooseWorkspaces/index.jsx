import { Divider } from "@mui/material";
import { ButtonWorkspace } from "./components";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import avatarTest from "../../../assets/images/avatar.jpg";

const ChooseWorkspaces = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("/workspaces/create");
    };
    const handleMoveOnApp = () => {
        navigate("/app/employees/list/index");
    };
    return (
        <>
            <div className="choose-workspaces__wrapper">
                <h2 className="choose-workspaces__title">Chọn workspace của bạn</h2>
                <div className="choose-workspaces__list-workspaces">
                    <ButtonWorkspace
                        onClick={handleMoveOnApp}
                        username="test"
                        avatar={avatarTest}
                    />
                    <ButtonWorkspace username="test" />
                </div>
                <Divider className="choose-workspaces__divider" />
                <div className="choose-workspaces__create">
                    <div>
                        <AddCircleOutlinedIcon className="icon" />
                        <p className="text" onClick={handleOnClick}>
                            Tạo workspace mới
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseWorkspaces;

import { Divider } from "@mui/material";
import "./styles.scss";

const MenuBoxInner = () => {
    return (
        <>
            <div className="menu-box-inner__wrapper">
                <p className="title">Workspace của bạn</p>
                <h4 className="name-workspace">Coffee store</h4>
                <Divider />
            </div>
        </>
    );
};

export default MenuBoxInner;
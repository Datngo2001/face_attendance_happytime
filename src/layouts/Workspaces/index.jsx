import { Outlet } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import tabTitle from "../../utils/tabTitle";
import "./styles.scss";

const WorkspacesLayout = () => {
    tabTitle("Workspaces")
    return (
        <>
            <HeaderMain />
            <div className="workspaces-layout__wrapper">
                <div className="workspaces-layout__container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default WorkspacesLayout;

import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import tabTitle from "../../utils/tabTitle";
import "./styles.scss";

const WorkspacesLayout = () => {
    tabTitle("Workspaces")
    return (
        <>
            <Header />
            <div className="workspaces-layout__wrapper">
                <div className="workspaces-layout__container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default WorkspacesLayout;

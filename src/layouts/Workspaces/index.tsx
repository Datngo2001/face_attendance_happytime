import { Outlet } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import { tabTitle } from "../../utils";
import "./styles.scss";

const WorkspacesLayout = () => {
    tabTitle("Workspaces")
    return (
        <>
            <HeaderMain isActive={undefined} state={undefined} setState={undefined} />
            <div className="workspaces-layout__wrapper">
                <div className="workspaces-layout__container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default WorkspacesLayout;

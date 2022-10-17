import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import SideBar from "../../components/Sidebar";
import "./styles.scss";

const MainLayout = () => {
    // STATE
    const [isCollapsed, setIsCollapsed] = useState(true);
    // *******************************
    return (
        <>
            <div className="main-layout__wrapper">
                <HeaderMain
                    isActive={true}
                    state={isCollapsed}
                    setState={setIsCollapsed}
                />
                <div className="main-layout__content">
                    <SideBar state={isCollapsed} />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default MainLayout;

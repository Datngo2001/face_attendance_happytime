import { useState } from "react";
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
                </div>
            </div>
        </>
    );
};

export default MainLayout;

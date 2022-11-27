import { useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import SideBar from "../../components/Sidebar";
import "./styles.scss";

const MainLayout = () => {
    // STATE
    const [isCollapsed, setIsCollapsed] = useState(true);
    // *******************************

    // HOOK ROUTER DOM
    // ****************************

    // HOOK EFFECT
    // ******************************

    return (
        <>
            <div className="main-layout__wrapper">
                <HeaderMain
                    isActive={true}
                    state={isCollapsed}
                    setState={setIsCollapsed}
                />
                <div className="main-layout__container">
                    <div className="main-layout__sidebar">
                        <SideBar state={isCollapsed} />
                    </div>
                    <div className="main-layout__content">
                        <Outlet />
                        <p
                            style={{
                                fontSize: "13px",
                                opacity: 0.5,
                                position: "fixed",
                                bottom: "8px",
                                right: "14px",
                            }}
                        >
                            Clone bởi Sinh viên Đại học Sư phạm kĩ thuật TP.Hồ Chí Minh
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainLayout;

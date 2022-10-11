import HeaderMain from "../../components/HeaderMain";
import SideBar from "../../components/SideBar";
import "./styles.scss";

const MainLayout = () => {
    return (
        <>
            <div className="main-layout__wrapper">
                <HeaderMain isActive={true} />
                <div className="main-layout__content">
                    <SideBar />
                </div>
            </div>
        </>
    );
};

export default MainLayout;

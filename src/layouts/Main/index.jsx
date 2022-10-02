import HeaderMain from "../../components/HeaderMain";
import "./styles.scss";

const MainLayout = () => {
    return (
        <>
            <div className="main-layout__wrapper">
                <HeaderMain isActive={true}/>
            </div>
        </>
    );
};

export default MainLayout;

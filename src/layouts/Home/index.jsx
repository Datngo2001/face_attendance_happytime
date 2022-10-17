import { Outlet } from "react-router-dom";
import HeaderHome from "../../components/HeaderHome";
import { tabTitle } from "../../utils";
import "./styles.scss";

const HomeLayout = () => {
    tabTitle("Nền tảng chấm công online hàng đầu HappyTime");
    return (
        <>
            <HeaderHome />
            <Outlet />
        </>
    );
};

export default HomeLayout;

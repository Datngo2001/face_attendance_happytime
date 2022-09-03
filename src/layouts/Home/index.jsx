import HeaderHome from "../../components/HeaderHome";
import tabTitle from "../../utils/tabTitle";
import "./styles.scss";

const HomeLayout = () => {
    tabTitle("Nền tảng chấm công online hàng đầu HappyTime");
    return (
        <>
            <HeaderHome />
        </>
    );
};

export default HomeLayout;

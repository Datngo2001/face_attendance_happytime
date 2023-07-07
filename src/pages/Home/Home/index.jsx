import { Link, useNavigate } from "react-router-dom";
import ButtonCustom from "../../../components/ButtonCustom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import imgHomeSection1 from "../../../assets/images/image-home-section-1.png";
import "./styles.scss";

const Home = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate("auth/login");
    };
    return (
        <>
            <section className="home-section-1__wrapper">
            </section>
        </>
    );
};

export default Home;

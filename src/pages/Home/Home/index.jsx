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
                <div className="home-section-1__text">
                    <h1 className="title">
                        Nền tảng <span>Quản lý & gia tăng trải nghiệm</span> nhân sự
                    </h1>
                    <p className="description">
                        Giải pháp giúp doanh nghiệp quản lý, lưu trữ dữ liệu chấm công và
                        đơn từ
                    </p>
                </div>
                <ButtonCustom className="btn-experience" onClick={handleOnClick}>
                    trải nghiệm miễn phí ngay
                </ButtonCustom>
                <p>
                    Nếu bạn đã có tài khoản?
                    <Link to="auth/login">
                        Đăng nhập ngay
                        <ChevronRightIcon />
                    </Link>
                </p>
                <img src={imgHomeSection1} alt="" className="home-section-1__img" />
            </section>
        </>
    );
};

export default Home;

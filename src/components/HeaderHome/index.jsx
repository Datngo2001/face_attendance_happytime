import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import { Link, useNavigate } from "react-router-dom";

const HeaderHome = () => {
    const nagivate = useNavigate();
    const handleMoveToLogin = () => {
        nagivate("auth/login");
    };
    const handleMoveToRegister = () => {
        nagivate("auth/register");
    };
    return (
        <>
            <header className="header-home__wrapper">
                <nav className="header-home__container">
                    <Link to="/">
                        <img src={logo} alt="" className="header-home__logo-img" />
                    </Link>
                    <ul className="list-link">
                        <Link className="link-item" to="/">
                            Trang chủ
                        </Link>
                        <Link className="link-item" to="/tinh-nang">
                            Tính năng
                        </Link>
                        <Link className="link-item" to="bao-gia">
                            Báo giá
                        </Link>
                        <Link className="link-item" to="blog">
                            Blog
                        </Link>
                        <Link className="link-item" to="danh-cho-nguoi-su-dung-app">
                            Người dùng
                        </Link>
                        <div className="header-home__actions">
                            <ButtonCustom
                                className="btn-login"
                                height="36px"
                                onClick={handleMoveToLogin}
                            >
                                Đăng nhập
                            </ButtonCustom>
                            <ButtonCustom
                                className="btn-logout"
                                height="36px"
                                onClick={handleMoveToRegister}
                            >
                                Đăng ký
                            </ButtonCustom>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default HeaderHome;

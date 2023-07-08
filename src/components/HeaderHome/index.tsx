import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import { Link, useNavigate } from "react-router-dom";

const HeaderHome = () => {
    const nagivate = useNavigate();
    const handleMoveToLogin = () => {
        nagivate("auth/login");
    };
    return (
        <>
            <header className="header-home__wrapper">
                <nav className="header-home__container">
                    <Link to="/">
                        <img src={logo} alt="" className="header-home__logo-img" />
                    </Link>
                    <ul className="list-link">
                        <div className="header-home__actions">
                            <ButtonCustom
                                className="btn-login"
                                height="36px"
                                onClick={handleMoveToLogin}
                            >
                                Đăng nhập
                            </ButtonCustom>
                        </div>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default HeaderHome;

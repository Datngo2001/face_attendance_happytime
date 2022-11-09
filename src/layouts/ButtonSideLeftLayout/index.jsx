import "./styles.scss";
import { Outlet } from "react-router-dom";
import ButtonSideLeft from "../../components/ButtonSideLeft";

const ButtonSideLeftLayout = ({ listDataButton = [] }) => {
    return (
        <>
            <div className="button-side-left-layout__wrapper">
                <div className="button-side-left-layout__list-btn-menu">
                    {listDataButton.map((data) => (
                        <ButtonSideLeft
                            key={data.path}
                            path={data.path}
                            title={data.title}
                            icon={data.icon}
                        />
                    ))}
                </div>
                <div className="outlet-layout__content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default ButtonSideLeftLayout;

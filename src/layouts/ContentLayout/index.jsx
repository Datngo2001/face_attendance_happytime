import "./styles.scss";
import { Outlet } from "react-router-dom";
import ButtonSideLeft from "../../components/ButtonSideLeft";

const ContentLayout = ({ listDataButton = [] }) => {
    return (
        <>
            <div className="content-layout__wrapper">
                <div className="content-layout__list-btn-menu">
                    {listDataButton.map((data) => (
                        <ButtonSideLeft
                            key={data.path}
                            path={data.path}
                            title={data.title}
                            icon={data.icon}
                        />
                    ))}
                </div>
                <div className="content-layout__outlet">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default ContentLayout;

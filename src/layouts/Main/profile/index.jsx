import { Outlet } from "react-router-dom";
import "./styles.scss";

const ProfileLayout = () => {
    return (
        <>
            <div className="profile-layout__wrapper">
                <Outlet />
            </div>
        </>
    );
};

export default ProfileLayout;

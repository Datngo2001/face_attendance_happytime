import "./styles.scss";
import { Outlet } from "react-router-dom";

const CameraLayout = () => {
    return (
        <>
            <div className="camera-layout__wrapper">
                <div className="camera-layout__outlet">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
export default CameraLayout;

import { ControlPanel, Table } from "./Components";
import "./styles.scss";

const Wifi: React.FC = () => {
    // ARROW FUNCTIONS
    // ****************************
    return (
        <>
            <div className="attendance-settings--mobile-wifi__wrapper">
                <ControlPanel />
                <Table />
            </div>
        </>
    );
};

export default Wifi;

import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import "./styles.scss";

const Devices = () => {
    return (
        <>
            <div className="attendance-settings--mobile-devices__wrapper">
                <ControlPanel />
                <Table />
            </div>
        </>
    );
};

export default Devices;

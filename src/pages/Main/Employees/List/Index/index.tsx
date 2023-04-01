import "./styles.scss";
import TableDataEmployees from "./Components/TableDataEmployees";
import { IndexControlPanel } from "./Components/IndexControlPanel";

const Index = () => {
    // STATE
    // ******************************

    // ARROW FUNCTION
    // ******************************

    return (
        <>
            <div className="index__wrapper">
                <IndexControlPanel />
                <div className="index__table">
                    <TableDataEmployees />
                </div>
            </div>
        </>
    );
};

export default Index;

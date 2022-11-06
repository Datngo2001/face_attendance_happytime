import "./styles.scss";
import TableDataEmployees from "./Components/TableDataEmployees";
import { useEffect } from "react";
import { IndexControlPanel } from "./Components/IndexControlPanel";

const Index = () => {
    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {}, []);
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

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
                    <p className="quantity-employees">
                        Có <span className="quantity">1</span> nhân viên trong danh sách
                    </p>
                    <TableDataEmployees />
                </div>
            </div>
        </>
    );
};

export default Index;

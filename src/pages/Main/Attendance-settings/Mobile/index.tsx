import TabsCustom from "components/TabsCustom";
import { listTabs } from "./listTabs";
import "./styles.scss";

const Mobile = () => {
    return (
        <>
            <div className="attendance-settings--mobile__wrapper">
                <TabsCustom listChildren={listTabs} />
            </div>
        </>
    );
};

export default Mobile;

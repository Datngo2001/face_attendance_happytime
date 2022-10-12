import { NavigatorItem } from "./components";
import { listNavigatorOptions } from "./data";
import "./styles.scss";

const Sidebar = ({ state }) => {
    // STATE

    // ********************************

    // ARROW FUNCTION

    // ********************************
    return (
        <>
            <div id="sidebarMain" className={state ? "show" : ""}>
                {listNavigatorOptions.map((navigatorItem, index) => {
                    return (
                        <NavigatorItem
                            key={index}
                            linkTo={navigatorItem.linkTo}
                            title={navigatorItem.title}
                            icon={navigatorItem.icon}
                            state={state}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Sidebar;

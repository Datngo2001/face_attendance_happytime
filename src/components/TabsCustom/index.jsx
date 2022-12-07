import { Tabs } from "antd";
import "./styles.scss";

const TabsCustom = ({ listChildren = [] }) => {
    // @ children: title/component
    return (
        <>
            <div className="tabs-custom__wrapper">
                <Tabs
                    defaultActiveKey="1"
                    size={"large"}
                    style={{
                        marginBottom: 32,
                    }}
                    items={listChildren.map((children, index) => {
                        return {
                            label: children.title,
                            key: children.title,
                            children: children.component,
                        };
                    })}
                />
            </div>
        </>
    );
};

export default TabsCustom;

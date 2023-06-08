import { Tabs } from "antd";
import "./styles.scss";

type Props = {
    listChildren: any
}

const TabsCustom: React.FC<Props> = ({ listChildren = [] }) => {
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
                            disabled: children.disabled,
                        };
                    })}
                />
            </div>
        </>
    );
};

export default TabsCustom;

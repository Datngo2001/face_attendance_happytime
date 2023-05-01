import { useEffect } from "react";
import WorkspaceSettingsForm from "../../../forms/Workspaces/WorkspaceSettingsForm";
import { tabTitle, titleHeaderMain } from "../../../utils";
import "./styles.scss";

const WorkspaceSettingsLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Cài đặt workspace");
    // *****************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Cài đặt workspace");
    }, []);
    // ******************************

    // STATE
    // ******************************

    return (
        <>
            <WorkspaceSettingsForm />
        </>
    );
};

export default WorkspaceSettingsLayout;

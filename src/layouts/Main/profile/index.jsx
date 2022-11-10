import { useEffect } from "react";
import { tabTitle, titleHeaderMain } from "../../../utils";
import ContentLayout from "../../ContentLayout";
import { dataListButtonSlideLeft } from "./dataListButtonSideLeft";
import "./styles.scss";

const ProfileLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Quản lý tài khoản");
    // *****************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Quản lý tài khoản");
    }, []);
    // ******************************

    // STATE
    // ******************************
    
    return (
        <>
            <ContentLayout listDataButton={dataListButtonSlideLeft} />
        </>
    );
};

export default ProfileLayout;

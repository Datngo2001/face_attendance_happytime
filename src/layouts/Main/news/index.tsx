import { useEffect } from "react";
import { tabTitle, titleHeaderMain } from "../../../utils";
import ContentLayout from "../../ContentLayout";
import { dataListButtonSlideLeft } from "./dataListButtonSideLeft";
import "./styles.scss";

const NewsLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Tin tức");
    // *****************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Tin tức");
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

export default NewsLayout;

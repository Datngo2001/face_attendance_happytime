import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";
import { detailInfor } from "./dataTest";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Header, WorkInformation } from "./components";

const View = () => {
    // STATE
    const { idOfSelectedStaff } = useSelector((state) => state.employees);
    // *****************************

    // VARIABLES
    const { id, avatar, name, jobPosition, typeEmployee } = detailInfor;
    // ******************************

    // HOOK EFFECT
    // *****************************

    // ARROW FUNCTIONS
    // *****************************

    console.log("id row:", idOfSelectedStaff);

    return (
        <>
            <div className="view__wrapper">
                <Link className="view__navigator" to="../list/index">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <Header avatar={avatar} name={name} id={id} />
                <WorkInformation />
            </div>
        </>
    );
};

export default View;

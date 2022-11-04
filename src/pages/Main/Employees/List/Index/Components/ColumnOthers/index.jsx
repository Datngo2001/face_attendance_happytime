import "./styles.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

export const ColumnOthers = ({ id }) => {
    // STATE
    // ******************************

    // ARROW FUNCTIONS
    const handleOnClick = (e) => {
        console.log("id", id);
    };
    // ******************************

    return (
        <>
            <div onClick={handleOnClick} className="column-others__wrapper">
                <span className="icon">
                    <MoreHorizRoundedIcon />
                </span>
            </div>
        </>
    );
};

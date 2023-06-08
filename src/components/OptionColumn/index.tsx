import "./styles.scss";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

type Props = {
    id: string;
}

export const OptionColumn: React.FC<Props> = ({ id }) => {
    // STATE
    // ******************************

    // ARROW FUNCTIONS
    const handleOnClick = (e) => {
        console.log("id", id);
    };
    // ******************************

    return (
        <>
            <div onClick={handleOnClick} className="option-column__wrapper">
                <span className="icon">
                    <MoreHorizRoundedIcon />
                </span>
            </div>
        </>
    );
};

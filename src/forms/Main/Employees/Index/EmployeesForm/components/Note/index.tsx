import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import InputNote from "../../../../../../../components/InputNote";
import "./styles.scss";

const Note = ({ control }) => {
    return (
        <>
            <div className="employees-form--note__wrapper divider-top">
                <div className="title">
                    <StickyNote2RoundedIcon />
                    Ghi chú
                </div>
                <InputNote name="note" control={control} width="100%" height="92px" />
            </div>
        </>
    );
};

export default Note;

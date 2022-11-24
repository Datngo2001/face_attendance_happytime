import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import InputNote from "../../../../../../../components/InputNote";
import "./styles.scss";

const Note = ({ register, setValue, errors }) => {
    return (
        <>
            <div className="employees-form--note__wrapper divider-top">
                <div className="title">
                    <StickyNote2RoundedIcon />
                    Ghi chú
                </div>
                <InputNote id="note" register={register} width="100%" height="92px" />
            </div>
        </>
    );
};

export default Note;

import "./styles.scss";
import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";

const Note = ({ note }) => {
    return (
        <>
            <div className="view-note__wrapper">
                <div className="title">
                    <StickyNote2RoundedIcon />
                    Ghi chú
                </div>
                <div className="content">
                    <p className="note">
                        {note}
                    </p>
                </div>
            </div>
        </>
    );
};

export default Note;

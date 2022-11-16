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
                        Chào mừng bạn đến với Ghi chú dính! Chúng tôi vẫn là cách tốt nhất
                        để viết ghi chú nhanh trên màn hình nền Windows của bạn, nhưng giờ
                        đây bạn cũng có thể mang theo các ghi chú dính, cho phép bạn chụp,
                        tìm và sử dụng ghi chú trên các ứng dụng và thiết bị yêu thích của
                        mình.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Note;

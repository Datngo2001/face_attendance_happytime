import "./styles.scss";
import ShortcutRoundedIcon from "@mui/icons-material/ShortcutRounded";

export const InnerButtonManipulation = ({ onClick }) => {
    return (
        <>
            <div onClick={onClick} className="inner-button-manipulation__wrapper">
                <span className="icon">
                    <ShortcutRoundedIcon />
                </span>
                <p className="text">Mời sử dụng HappyTime</p>
            </div>
        </>
    );
};

import { Box } from "@mui/system";
import "./styles.scss";
import imgNoRows from "../../assets/images/NoRows.png";

const NoRowsOverlayCustom = ({
    title = "Không có kết quả nào phù hợp với nội dung tìm kiếm",
}) => {
    return (
        <>
            <div className="no-rows-overlay-custom__wrapper">
                <img src={imgNoRows} alt="" className="img" />
                <p className="des">{title}</p>
            </div>
        </>
    );
};

export default NoRowsOverlayCustom;

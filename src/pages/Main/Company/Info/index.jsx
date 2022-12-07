import ButtonCustom from "../../../../components/ButtonCustom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import "./styles.scss";
import { useEffect } from "react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import SubtitlesRoundedIcon from "@mui/icons-material/SubtitlesRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import ChromeReaderModeRoundedIcon from "@mui/icons-material/ChromeReaderModeRounded";
import FoundationRoundedIcon from "@mui/icons-material/FoundationRounded";
import FormatShapesRoundedIcon from "@mui/icons-material/FormatShapesRounded";
import { useNavigate } from "react-router-dom";
import LoadingCustom from "../../../../components/LoadingCustom";
import { useDispatch, useSelector } from "react-redux";
import { extraReducersGetInfoCompany } from "../../../../store/slices/Main/Company/actions/extraReducers";

const Info = () => {
    // HOOK REDUX TOOLKIT
    const { loading, infoOfCompany } = useSelector((state) => state.company);
    const dispatch = useDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(extraReducersGetInfoCompany());
    }, []);

    // ****************************

    // ROUTER HOOK
    const navigate = useNavigate();
    //****************************

    // ARROW FUNCTIONS
    const handleOnClick = () => {
        navigate("../change-info");
    };
    // ****************************
    console.log("infoOfCompany", infoOfCompany);

    return (
        <>
            {loading ? (
                <LoadingCustom />
            ) : (
                <div className="company--info__wrapper">
                    <div className="content-title">Thông tin công ty</div>
                    <div className="company--info__content">
                        <div className="company--info__header divider-bottom">
                            <div className="avatar-name">
                                <div className="avatar">
                                    {infoOfCompany.avatar ? (
                                        <img src={infoOfCompany.avatar} alt="" />
                                    ) : (
                                        <div className="none-avatar">
                                            <ApartmentRoundedIcon
                                                sx={{
                                                    stroke: "#ffffff",
                                                    strokeWidth: 0.5,
                                                }}
                                            />
                                        </div>
                                    )}
                                </div>
                                <p className="name">{infoOfCompany.company_name}</p>
                            </div>
                            <div className="action">
                                <ButtonCustom
                                    className="btn"
                                    type={2}
                                    width="134px"
                                    height="40px"
                                    icon={<EditRoundedIcon />}
                                    onClick={handleOnClick}
                                >
                                    Chỉnh sửa
                                </ButtonCustom>
                            </div>
                        </div>
                        <div className="company--info__body">
                            <div className="col">
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <LocalPhoneRoundedIcon />
                                        </span>
                                        Hotline
                                    </div>
                                    <p id="phone" className="text">
                                        {infoOfCompany.hotline}
                                    </p>
                                </div>
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <EmailRoundedIcon />
                                        </span>
                                        Email
                                    </div>
                                    <p id="email" className="text">
                                        {infoOfCompany.company_mail}
                                    </p>
                                </div>
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <SubtitlesRoundedIcon />
                                        </span>
                                        Mã số thuế
                                    </div>
                                    <p id="taxCode" className="text">
                                        {infoOfCompany.tax_number}
                                    </p>
                                </div>
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <InfoRoundedIcon />
                                        </span>
                                        Mô tả
                                    </div>
                                    <p id="description" className="text"></p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <LanguageRoundedIcon />
                                        </span>
                                        Website
                                    </div>
                                    <p id="website" className="text">
                                        {infoOfCompany.website}
                                    </p>
                                </div>
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <ChromeReaderModeRoundedIcon />
                                        </span>
                                        Fanpage
                                    </div>
                                    <p id="fanpage" className="text">
                                        {infoOfCompany.fanpage}
                                    </p>
                                </div>
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <FoundationRoundedIcon />
                                        </span>
                                        Trụ sở chính
                                    </div>
                                    <p id="mainBase" className="text"></p>
                                </div>
                                <div className="item divider-bottom">
                                    <div className="label">
                                        <span className="icon">
                                            <FormatShapesRoundedIcon />
                                        </span>
                                        Tên viết tắt của công ty
                                    </div>
                                    <p id="shorthandName" className="text">
                                        {infoOfCompany.company_shorthand}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Info;

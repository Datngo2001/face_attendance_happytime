import { useNavigate, useParams } from "react-router-dom"
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss"
import { FormAction } from "forms/formAction";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import { NewsDetailForm } from "forms/Main/News/NewsDetailForm";
import { useEffect } from "react";
import { extraReducersGetNewsById } from "store/slices/Main/News/actions/extraReducers";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";

export const NewsDetail: React.FC = () => {
    const { action, id } = useParams();
    const navigate = useNavigate();
    const { openConfirmModal } = useConfirmMoldal();
    const dispatch = useAppDispatch();
    const { news } = useAppSelector(state => state.news)

    const handleBackClick = () => {
        openConfirmModal(
            "Xác nhận",
            "Có thao tác chưa được lưu, bạn có muốn thoát",
            () => {
                navigate("../list")
            }
        )
    }

    useEffect(() => {
        if (action === FormAction.UPDATE) {
            dispatch(extraReducersGetNewsById(id))
        }
    }, [action, id])

    return (
        <div className="news-detail">
            <div className="content-navigator" onClick={() => handleBackClick()}>
                <ArrowBackRoundedIcon />
                Quay lại
            </div>
            {action === FormAction.CREATE && <NewsDetailForm action={action as FormAction} />}
            {action === FormAction.UPDATE && news && <NewsDetailForm action={action as FormAction} news={news} />}
        </div>
    )
}
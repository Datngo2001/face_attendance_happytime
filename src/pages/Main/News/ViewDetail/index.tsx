import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { extraReducersGetNewsById } from "store/slices/Main/News/actions/extraReducers";
import "./styles.scss"
import { Avatar, Divider, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import dayjs from "dayjs";
import { DateFormat } from "components/InputDate/default";
import { RichTextView } from "components/RichTextView";
import ButtonCustom from "components/ButtonCustom";
import { FormAction } from "forms/formAction";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import { InfiniteScrollList } from "components/InfiniteScrollList";
import { NewsReplies, NewsRepliesType } from "store/slices/Main/NewsReplies/newsRepliesSlice";
import { api } from "config/api";

export const ViewDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const { news } = useAppSelector(state => state.news)

    useEffect(() => {
        dispatch(extraReducersGetNewsById(id))
    }, [id])

    const handleLoadMoreLike = (page, setPage, setListItem, setLoading, setIsHaveMore) => {
        setLoading(true)
        api.post(`/api/news/reply/search?page=${page + 1}&size=3`, { news_id: id, type: NewsRepliesType.like })
            .then((response: any) => {
                if (response.payload.items && response.payload.items?.length > 0) {
                    setListItem(items => [...items, ...response.payload.items])
                    setPage(page + 1)
                }

                if (response.payload.items?.length <= 0) {
                    setIsHaveMore(false)
                }

                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleLoadMoreComment = (page, setPage, setListItem, setLoading, setIsHaveMore) => {
        setLoading(true)
        api.post(`/api/news/reply/search?page=${page + 1}&size=3`, { news_id: id, type: NewsRepliesType.comment })
            .then((response: any) => {
                if (response.payload.items && response.payload.items?.length > 0) {
                    setListItem(items => [...items, ...response.payload.items])
                    setPage(page + 1)
                }

                if (response.payload.items?.length <= 0) {
                    setIsHaveMore(false)
                }

                setLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="view-detail">
            <div className="content-navigator" onClick={() => navigate(-1)}>
                <ArrowBackRoundedIcon />
                Quay lại
            </div>
            {news && (
                <div className="news-detail-view">
                    <div className="view-header">
                        <div className="news-index">
                            <VisibilityIcon />
                            {news.total_views}
                            <ThumbUpAltIcon />
                            {news.total_likes}
                            <CommentIcon />
                            {news.total_replies}
                        </div>
                        <div className="action">
                            <ButtonCustom onClick={() => navigate(`../news-detail/${FormAction.UPDATE}/${id}`)}>
                                Chỉnh sửa
                            </ButtonCustom>
                        </div>
                    </div>
                    <Divider light sx={{ marginBottom: "20px" }} />
                    <div className="view-body">
                        <div className="main">
                            <h2>{news.title}</h2>
                            <h3>{news.category_name}</h3>
                            <RichTextView htmlValue={news.content} />
                        </div>
                        <div className="right-side">
                            <div className="create-date">
                                <span>Ngày tạo</span>
                                <span>{dayjs(news.post_date).format(DateFormat)}</span>
                            </div>
                            <Divider light sx={{ marginBottom: "20px", marginTop: "20px" }} />
                            <div className="likes">
                                <span>Đã tương tác</span>
                                <InfiniteScrollList
                                    renderItem={(item: NewsReplies) => (
                                        <>
                                            <ListItemAvatar>
                                                <Avatar alt={item.agent_view.name} src={item.agent_view.avatar} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.agent_view.name}
                                                secondary={dayjs(item.created_date).format("HH:mm DD/MM/YYYY")}
                                            />
                                        </>
                                    )}
                                    handleLoadMore={handleLoadMoreLike} />
                            </div>
                            <Divider light sx={{ marginBottom: "20px", marginTop: "20px" }} />
                            <div className="comments">
                                <span>Đã phản hồi</span>
                                <InfiniteScrollList
                                    renderItem={(item: NewsReplies) => (
                                        <>
                                            <ListItemAvatar>
                                                <Avatar alt={item.agent_view.name} src={item.agent_view.avatar} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.agent_view.name}
                                                secondary={<>
                                                    <Typography
                                                        sx={{ display: 'block' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {dayjs(item.created_date).format("HH:mm DD/MM/YYYY")}
                                                    </Typography>
                                                    {item.reply_content}
                                                </>}
                                            />
                                        </>
                                    )}
                                    handleLoadMore={handleLoadMoreComment} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
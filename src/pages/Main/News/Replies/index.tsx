import { useForm } from "react-hook-form";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import "./styles.scss";
import { useAppDispatch } from "hooks/useAppDispatch";
import useThrottle from "hooks/useThrottle";
import { useEffect } from "react";
import { extraReducersSearchNewsReplies } from "store/slices/Main/NewsReplies/actions/extraReducers";
import { NewsRepliesSearchParams } from "store/slices/Main/NewsReplies/newsRepliesSlice";

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
    type: null,
    reply_content: ""
} as NewsRepliesSearchParams

export const Replies: React.FC = () => {
    const { control, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersSearchNewsReplies(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    return (
        <div className="news-replies">
            <ControlPanel control={control} handleSearch={handleSearch} />
            <Table control={control} handleSearch={handleSearch} />
        </div>
    )
}
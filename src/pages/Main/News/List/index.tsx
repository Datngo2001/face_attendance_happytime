import { useForm } from "react-hook-form";
import "./styles.scss";
import { useAppDispatch } from "hooks/useAppDispatch";
import useThrottle from "hooks/useThrottle";
import { useEffect } from "react";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import { NewsSearchParams } from "store/slices/Main/News/newsSlice";
import { extraReducersSearchNews } from "store/slices/Main/News/actions/extraReducers";

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
    title: ""
} as NewsSearchParams

export const List: React.FC = () => {
    const { control, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersSearchNews(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    return (
        <>
            <div className="news-list">
                <ControlPanel control={control} handleSearch={handleSearch} />
                <Table control={control} handleSearch={handleSearch} />
            </div>
        </>
    );
}
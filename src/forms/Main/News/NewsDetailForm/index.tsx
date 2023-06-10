import ButtonCustom from "components/ButtonCustom"
import InputCustom from "components/InputCustom";
import { DateFormat } from "components/InputDate/default";
import InputFile from "components/InputFile";
import RadioGroupCustom, { RadioItem } from "components/RadioGroupCustom";
import { RichTextInput } from "components/RichTextInput";
import SelectCustom, { SelectBoxOption } from "components/SelectCustom";
import dayjs from "dayjs";
import { FormAction } from "forms/formAction"
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import useCRUDForm from "hooks/useCRUDForm"
import { useEffect, useMemo } from "react";
import { News, NewsStatus } from "store/slices/Main/News/newsSlice"
import { extraReducersSearchNewsCategory } from "store/slices/Main/NewsCategories/actions/extraReducers";
import * as yup from "yup";
import "./styles.scss"
import { Divider } from "@mui/material";
import { uploadImgToFirebase } from "utils/uploadImgToFirebase";
import { extraReducersCreateNews, extraReducersUpdateNews } from "store/slices/Main/News/actions/extraReducers";
import { useNavigate, useParams } from "react-router-dom";

const schema = yup.object({
    title: yup.string().required("Tiêu đề không được bỏ trống"),
})

type Props = {
    action: FormAction
    news?: News
}

const defaultCreateValues: News = {
    title: "",
    category_id: null,
    status: NewsStatus.draft,
    banner: "",
    content: "",
    category_name: "",
    total_views: 0,
    total_likes: 0,
    total_replies: 0,
    post_date: Date.now(),
    job_id: "",
    create_by: {
        action: "",
        agent_id: "",
        name: "",
        updated_at: 0
    },
    ref: {
        action: "",
        agent_id: "",
        name: "",
        updated_at: 0
    }
}

const statusRadioItems: RadioItem[] = [
    {
        label: "Đăng ngay",
        value: NewsStatus.posted,
    },
    {
        label: "Lưu nháp",
        value: NewsStatus.draft,
    },
    {
        label: "Đặt lịch",
        value: NewsStatus.on_scheduled,
    }
]

export const NewsDetailForm: React.FC<Props> = ({ action, news }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { listOfNewsCategory } = useAppSelector(state => state.newsCategories)

    const { control, getValues } = useCRUDForm({
        defaultValues: action === FormAction.CREATE ? defaultCreateValues : news,
        validationSchema: schema
    });

    useEffect(() => {
        dispatch(extraReducersSearchNewsCategory({
            page: 0,
            size: 100,
            keyword: ""
        }))

    }, [])

    let categoryOptions = useMemo(() => listOfNewsCategory.map(category => ({
        id: category._id,
        name: category.category_name
    } as SelectBoxOption)), [listOfNewsCategory])

    const handleCreateSubmit = async () => {
        const data = getValues()

        const bannerUrl = await uploadImgToFirebase({
            id: data._id,
            imageUpload: data.banner,
        });

        dispatch(extraReducersCreateNews({
            data: { ...data, banner: bannerUrl },
            onSuccess: () => navigate("../list")
        }))
    }

    const handleUpdateSubmit = async () => {
        const data = getValues()

        const bannerUrl = news.banner !== data.banner ? await uploadImgToFirebase({
            id: data._id,
            imageUpload: data.banner,
        }) : news.banner;

        dispatch(extraReducersUpdateNews({
            data: { ...data, banner: bannerUrl },
            onSuccess: () => navigate("../list")
        }))
    }

    return (
        <div className="news-detail-form">
            <div className="form-header">
                <div className="title">{action === FormAction.CREATE ? "Đăng tin mới" : "Cập nhật tin tức"}</div>
                <div className="action">
                    <ButtonCustom onClick={
                        action === FormAction.CREATE ? handleCreateSubmit : handleUpdateSubmit
                    }>Lưu</ButtonCustom>
                </div>
            </div>
            <Divider light sx={{ marginBottom: "20px" }} />
            <div className="form-body">
                <div className="main">
                    <InputCustom
                        className="news-title"
                        label="Tiêu đề"
                        name={"title"}
                        placeholder="Nhập tiêu đề bài viết"
                        control={control} />
                    <RichTextInput name={"content"} control={control} />
                </div>
                <div className="right-side">
                    <div className="create-date">
                        <span>Ngày tạo</span>
                        <span>{dayjs(Date.now()).format(DateFormat)}</span>
                    </div>
                    <Divider light sx={{ marginBottom: "20px", marginTop: "20px" }} />
                    <RadioGroupCustom
                        label="Trạng thái hiển thị"
                        name={"status"}
                        control={control}
                        items={statusRadioItems} />
                    <Divider light sx={{ marginBottom: "20px", marginTop: "20px" }} />
                    <SelectCustom
                        placeholder="Chọn danh mục"
                        label="Danh mục"
                        name={"category_id"}
                        control={control}
                        options={categoryOptions} />
                    <Divider light sx={{ marginBottom: "20px", marginTop: "20px" }} />
                    <InputFile
                        className="input-banner"
                        type={2}
                        sizePreImg="500px"
                        title="Chọn banner từ thư mục"
                        control={control}
                        name={"banner"} />
                </div>
            </div>
        </div>
    )
}

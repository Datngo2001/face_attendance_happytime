import useCRUDForm from "hooks/useCRUDForm";
import { NewsCategory } from "store/slices/Main/NewsCategories/newsCategoriesSlice";
import * as yup from "yup";
import "./styles.scss"
import InputCustom from "components/InputCustom";
import { FormAction } from "forms/formAction";
import ButtonCustom from "components/ButtonCustom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersCreateNewsCategory, extraReducersUpdateNewsCategory } from "store/slices/Main/NewsCategories/actions/extraReducers";
import { useMemo } from "react";
import { useAppSelector } from "hooks/useAppSelector";

const schema = yup.object({
    category_name: yup.string().required("Tên  không được bỏ trống"),
})

const createDefaultValues: NewsCategory = {
    category_name: "",
    created_date: 0,
    last_updated_date: 0,
    total_news: 0
}

type Props = {
    action: FormAction
    setOpen?: any
}

export const CategoryForm: React.FC<Props> = ({ action, setOpen = () => { } }) => {
    const dispatch = useAppDispatch()
    const { newsCategory } = useAppSelector(state => state.newsCategories)

    const defaultValues = useMemo(() => {
        if (action === FormAction.CREATE) {
            return createDefaultValues
        }
        return newsCategory;
    }, [newsCategory?._id])

    const { control, getValues, handleSubmit } = useCRUDForm({
        defaultValues: defaultValues,
        validationSchema: schema
    });

    const handleSubmitCreate = () => {
        dispatch(extraReducersCreateNewsCategory(getValues()))
    }

    const handleSubmitUpdate = () => {
        dispatch(extraReducersUpdateNewsCategory(getValues()))
        setOpen(false)
    }

    return (
        <div className="news-categories-form">
            <InputCustom
                className="category_name"
                label="Tên"
                placeholder="Nhập tên danh mục"
                name={"category_name"}
                control={control} />

            <div className="submit">
                <ButtonCustom onClick={handleSubmit(
                    action === FormAction.UPDATE
                        ? handleSubmitUpdate
                        : handleSubmitCreate
                )}>{FormAction.CREATE ? "Thêm Danh Mục" : "Chỉnh Sửa Danh Mục"}</ButtonCustom>
            </div>
        </div>
    )
}
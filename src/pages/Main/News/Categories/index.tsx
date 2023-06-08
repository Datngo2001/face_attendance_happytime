import { Stack } from "@mui/material";
import "./styles.scss";
import useCRUDForm from "hooks/useCRUDForm";
import { NewsCategorySearchParams, setCurrentNewsCategory } from "store/slices/Main/NewsCategories/newsCategoriesSlice";
import { FormAction } from "forms/formAction";
import DataGridCustom from "components/DataGridCustom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { getColumns } from "./component";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";
import { useEffect, useState } from "react";
import { extraReducersDeleteNewsCategory, extraReducersSearchNewsCategory } from "store/slices/Main/NewsCategories/actions/extraReducers";
import { CategoryForm } from "forms/Main/News/CategoryForm";
import InputCustom from "components/InputCustom";
import useThrottle from "hooks/useThrottle";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import ModalCustom from "components/ModalCustom";

const defaultSearchParams: NewsCategorySearchParams = {
    keyword: "",
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE)
}

export const Categories: React.FC = () => {
    const [open, setOpen] = useState(false)
    const dispatch = useAppDispatch()
    const { listOfNewsCategory, loading, totalPages, lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess } = useAppSelector(state => state.newsCategories);

    const { control, getValues, watch } = useCRUDForm({
        defaultValues: defaultSearchParams
    });

    const { openConfirmModal } = useConfirmMoldal();

    useEffect(() => {
        dispatch(extraReducersSearchNewsCategory(getValues()))
    }, [lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess])

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersSearchNewsCategory(getValues()))
    }, 500)

    const searchParams = watch();

    useEffect(() => {
        handleSearch();
    }, [JSON.stringify(searchParams)])

    const handleUpdateClick = (id) => {
        dispatch(setCurrentNewsCategory({ id }))
        setOpen(true)
    }

    const handleDelete = (id) => {
        openConfirmModal(
            "Xác nhận",
            "Bạn có muốn xóa danh mục này không?",
            () => {
                dispatch(extraReducersDeleteNewsCategory(id))
            }
        )
    }

    return (
        <div className="news-categories">
            <div className="page-title">DANH MỤC</div>
            <div className="page-body">
                <div className="form">
                    <p className="title">Thêm Danh Mục</p>
                    <CategoryForm action={FormAction.CREATE} />
                </div>
                <div className="table-group">
                    <div className="control-pannel">
                        <InputCustom
                            placeholder="Tìm kiếm danh mục"
                            name={"keyword"}
                            control={control} />
                    </div>
                    <div className="table">
                        <DataGridCustom
                            headerHeight={60}
                            rowHeight={60}
                            rows={listOfNewsCategory}
                            columns={getColumns(handleUpdateClick, handleDelete)}
                            getRowId={(row) => row._id}
                            rowsPerPageOptions={[5]}
                            loading={loading}
                        />
                        <FormPaginationCustom control={control} name={'page'} totalPages={totalPages} />
                    </div>
                </div>
            </div>
            <ModalCustom
                titleHeader={"CHỈNH SỬA THÔNG TIN WIFI"}
                state={open}
                setState={setOpen}
                footer={false}
                callback={() => { }}>
                <CategoryForm action={FormAction.UPDATE} setOpen={setOpen} />
            </ModalCustom>
        </div>
    )
}
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { FormAction } from "forms/formAction";
import SelectCustom, { SelectBoxOption } from "components/SelectCustom";
import { NewsStatus } from "store/slices/Main/News/newsSlice";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { useEffect, useMemo } from "react";
import { extraReducersSearchNewsCategory } from "store/slices/Main/NewsCategories/actions/extraReducers";

const statusOption: SelectBoxOption[] = [
  {
    name: "Đã đăng",
    id: NewsStatus.posted,
  },
  {
    name: "Lưu nháp",
    id: NewsStatus.draft,
  },
  {
    name: "Đặt lịch",
    id: NewsStatus.on_scheduled,
  }
]

type Props = {
  control: any
  handleSearch: any
}

const ControlPanel: React.FC<Props> = ({ control }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const { listOfNewsCategory } = useAppSelector(state => state.newsCategories);

  useEffect(() => {
    dispatch(extraReducersSearchNewsCategory({
      keyword: "",
      page: 0,
      size: 1000
    }))
  }, [])

  const categoryOptions = useMemo(() => listOfNewsCategory.map(c => ({
    name: c.category_name,
    id: c._id,
  } as SelectBoxOption)), [listOfNewsCategory])

  return (
    <>
      <div className="news-list-control-panel">
        <InputCustom
          className="search-box"
          name="title"
          width="100%"
          control={control}
          placeholder="Tên bài viết"
          iconRight={<SearchRoundedIcon />}
        />
        <SelectCustom
          className="status-box"
          name="status"
          width="100%"
          control={control}
          placeholder="Trạng thái"
          options={statusOption} />
        <SelectCustom
          className="category-box"
          name="category_id"
          width="100%"
          control={control}
          placeholder="Danh mục"
          options={categoryOptions} />
        <ButtonCustom
          className="add-btn"
          width="90px"
          height="32px"
          type={1}
          icon={<AddRoundedIcon />}
          onClick={() => navigate(`../news-detail/${FormAction.CREATE}`)}
        >
          Tạo mới bài viết
        </ButtonCustom>
      </div>
    </>
  );
};

export default ControlPanel;

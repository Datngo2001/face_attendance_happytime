import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { FormAction } from "forms/formAction";
import SelectCustom, { SelectBoxOption } from "components/SelectCustom";
import { NewsStatus } from "store/slices/Main/News/newsSlice";

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
          className="search-box"
          name="status"
          width="100%"
          control={control}
          placeholder="Trạng thái"
          options={statusOption} />
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

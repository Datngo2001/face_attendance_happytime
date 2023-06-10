import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { useNavigate } from "react-router-dom";
import { FormAction } from "forms/formAction";

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
          name="reply_content"
          width="100%"
          control={control}
          placeholder="Nội dung phản hồi"
          iconRight={<SearchRoundedIcon />}
        />
      </div>
    </>
  );
};

export default ControlPanel;

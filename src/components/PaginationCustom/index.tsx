import { Pagination } from "@mui/material";
import "./styles.scss";

const PaginationCustom = ({ page, setPage, totalPages }) => {
  // STATE
  // ******************************

  // ARROW FUNCTIONS
  const handleOnChange = (e, value) => {
    setPage(value);
  };
  // ****************************

  return (
    <>
      <div className="pagination-custom__wrapper">
        <Pagination
          page={page}
          onChange={handleOnChange}
          count={totalPages}
          variant="outlined"
          shape="rounded"
        />
      </div>
    </>
  );
};

export default PaginationCustom;

import { Pagination } from "@mui/material";
import "./styles.scss";

const PaginationCustom = ({ page, totalPages, onChange }) => {
    return (
        <>
            <div className="pagination-custom__wrapper">
                <Pagination
                    page={page}
                    onChange={onChange}
                    count={totalPages}
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </>
    );
};

export default PaginationCustom;

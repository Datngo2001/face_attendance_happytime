import { Table } from "antd";
import PaginationCustom from "../../../../../../components/PaginationCustom";
import { columns } from "./components";
import { listEmployees } from "./dataTest";
import "./styles.scss";

const TableLeaveManagement = () => {
    return (
        <>
            <div className="leave-management--table__wrapper">
                <Table
                    columns={columns}
                    dataSource={listEmployees}
                    scroll={{
                        x: 1300,
                        y: 250,
                    }}
                    bordered
                    pagination={false}
                    loading={false}
                />
                <div className="leave-management--table__pagination">
                    <PaginationCustom />
                </div>
            </div>
        </>
    );
};

export default TableLeaveManagement;

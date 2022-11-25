import NoRowsOverlayCustom from "../../../../../../components/NoRowsOverlayCustom";
import { ColumnName } from "../ColumnName";

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};
const TotalLeaveDaysRow = ({ data }) => {
    return (
        <>
            <div className="row__wrapper total-leave-days">{data}</div>
        </>
    );
};

const LeaveDaysThisYearRow = ({ data }) => {
    return (
        <>
            <div className="row__wrapper leave-days-this-year">{data}</div>
        </>
    );
};

const LeaveDaysLastYearRow = ({ data }) => {
    return (
        <>
            <div className="row__wrapper leave-days-last-year">{data}</div>
        </>
    );
};

const RowDepartment = ({ data }) => {
    return (
        <>
            <div className="row-department__wrapper">
                <p className="text">{data}</p>
            </div>
        </>
    );
};

export const columns = [
    {
        key: "id",
        dataIndex: "id",
        title: "Mã nhân viên",
        width: 170,
        fixed: "left",
    },
    {
        key: "fullName",
        dataIndex: "fullName",
        title: "Nhân viên",
        width: 338,
        fixed: "left",
        render: (text, rowData) => (
            <ColumnName img="" role={rowData.role} name={rowData.name} />
        ),
    },
    {
        key: "department",
        dataIndex: "department",
        title: "Phòng ban",
        width: 280,
        render: (text, rowData) => <RowDepartment data={rowData.department} />,
    },
    {
        key: "totalLeave",
        title: "Tổng phép",
        width: 405,
        children: [
            {
                title: "Tổng",
                dataIndex: "totalLeave",
                width: 100,
                render: (text, rowData) => (
                    <TotalLeaveDaysRow data={rowData.totalLeave.total} />
                ),
            },
            {
                title: "Đã dùng",
                dataIndex: "totalLeave",
                width: 100,
                render: (text, rowData) => (
                    <TotalLeaveDaysRow data={rowData.totalLeave.used} />
                ),
            },
            {
                title: "Hết hạn",
                dataIndex: "totalLeave",
                width: 100,
                render: (text, rowData) => (
                    <TotalLeaveDaysRow data={rowData.totalLeave.expire} />
                ),
            },
            {
                title: "Còn lại",
                dataIndex: "totalLeave",
                width: 100,
                render: (text, rowData) => (
                    <TotalLeaveDaysRow data={rowData.totalLeave.rest} />
                ),
            },
        ],
    },
    {
        key: "theLeaveThisYear",
        title: "Phép năm nay",
        width: 305,
        children: [
            {
                title: "Tổng",
                dataIndex: "theLeaveThisYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysThisYearRow data={rowData.theLeaveThisYear.total} />
                ),
            },
            {
                title: "Đã dùng",
                dataIndex: "theLeaveThisYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysThisYearRow data={rowData.theLeaveThisYear.used} />
                ),
            },
            {
                title: "Còn lại",
                dataIndex: "theLeaveThisYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysThisYearRow data={rowData.theLeaveThisYear.rest} />
                ),
            },
        ],
    },
    {
        key: "theLeaveLastYear",
        title: "Phép năm trước",
        width: 405,
        children: [
            {
                title: "Tổng",
                dataIndex: "theLeaveLastYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysLastYearRow data={rowData.theLeaveLastYear.total} />
                ),
            },
            {
                title: "Đã dùng",
                dataIndex: "theLeaveLastYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysLastYearRow data={rowData.theLeaveLastYear.used} />
                ),
            },
            {
                title: "Hết hạn",
                dataIndex: "theLeaveLastYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysLastYearRow data={rowData.theLeaveLastYear.expire} />
                ),
            },
            {
                title: "Còn lại",
                dataIndex: "theLeaveLastYear",
                width: 100,
                render: (text, rowData) => (
                    <LeaveDaysLastYearRow data={rowData.theLeaveLastYear.rest} />
                ),
            },
        ],
    },
];

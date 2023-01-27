import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PaginationCustom from "../../../../../../components/PaginationCustom";
import { convertDayToNameDay } from "../../../../../../utils";
import ColumnName from "./components/ColumnName";
import ColumnWeekdays from "./components/ColumnWeekdays";
import HeaderWeekdays from "./components/HeaderWeekdays";
import { rows } from "./dataTest";
import "./styles.scss";

const Table = () => {
    // STATE
    const [page, setPage] = useState(1);
    // ****************************************************

    // ARROW FUNCTIONS
    // ****************************************************

    // HOOK REDUX TOOLKIT
    const { listWeekdays } = useSelector((state) => state.attendances);
    // ****************************************************

    // VARIABLES
    let columns = [
        {
            field: "fullName",
            headerName: "Tên nhân viên",
            sortable: false,
            width: 260,
            headerAlign: "center",
            renderCell: (params) => {
                return (
                    <ColumnName
                        img={params.row.img}
                        name={params.row.fullName}
                        id={params.row.idEmployee}
                    />
                );
            },
        },
    ];
    listWeekdays.forEach((weekday) => {
        columns.push({
            field: convertDayToNameDay({
                type: 2,
                day: weekday.day,
            }),
            renderHeader: () => {
                return <HeaderWeekdays day={weekday.day} date={weekday.date} />;
            },
            sortable: false,
            flex: 1,
            headerAlign: "center",
            renderCell: (params) => {
                return (
                    <ColumnWeekdays
                        morning={
                            params.row[
                                convertDayToNameDay({
                                    type: 2,
                                    day: weekday.day,
                                })
                            ]?.morning
                        }
                        isDayOff={
                            convertDayToNameDay({
                                type: 2,
                                day: weekday.day,
                            }) === "sunday" ||
                            (convertDayToNameDay({
                                type: 2,
                                day: weekday.day,
                            }) === "saturday" &&
                                true)
                        }
                        afternoon={
                            params.row[
                                convertDayToNameDay({
                                    type: 2,
                                    day: weekday.day,
                                })
                            ]?.afternoon
                        }
                    />
                );
            },
        });
    });
    // ****************************************************

    // HOOK EFFECT
    useEffect(() => {}, [listWeekdays]);
    // ****************************************************

    return (
        <>
            <div className="attendances--summary--table__wrapper">
                <p className="quantity-employees">
                    Có <span className="quantity">{rows.length}</span> nhân viên trong
                    danh sách
                </p>
                <Box sx={{ height: 300, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={67}
                            rowHeight={67}
                            rows={rows}
                            columns={columns}
                            getRowId={(row) => row.id}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                            hideFooter={true}
                            // loading={loading}
                            // components={{
                            //     Pagination: false,
                            //     NoRowsOverlay: CustomNoRowsOverlay,
                            //     LoadingOverlay: LoadingCustom,
                            // }}
                        />
                        {true > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    padding: "16px 24px",
                                    backgroundColor: "#ffffff",
                                    borderTop: "1px solid #eeeeee",
                                }}
                            >
                                <PaginationCustom
                                    page={page}
                                    setPage={setPage}
                                    totalPages={1}
                                />
                            </div>
                        )}
                    </>
                </Box>
            </div>
        </>
    );
};

export default Table;

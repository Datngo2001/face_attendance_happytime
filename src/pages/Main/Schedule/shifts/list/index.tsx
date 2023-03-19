import React, { useEffect, useState } from "react";
import ShiftTable from "../components/ShiftTable";
import ShiftSearchPannel from "../components/ShiftSearchPannel";
import { useForm } from "react-hook-form";
import useThrottle from "hooks/useThrottle";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersGetListShifts } from "store/slices/Main/Shifts/actions/extraReducers";

const ListShifts: React.FC = () => {

  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { control, watch, getValues } = useForm({
    defaultValues: {
      shiftStatus: "ALL"
    }
  });

  useEffect(() => {
    const subscription = watch((value) => handleSearch(value));
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    handleSearch(getValues())
  }, [page]);

  const handleSearch = useThrottle((params) => {
    dispatch(
      extraReducersGetListShifts({
        page: page,
        size: process.env.REACT_APP_PAGE_SIZE,
        params: params
      })
    );
  }, 500);

  return (
    <>
      <div className="ListShifts__wrapper">
        <ShiftSearchPannel control={control} />
        <ShiftTable page={page} setPage={setPage} />
      </div>
    </>
  )
}

export default ListShifts;

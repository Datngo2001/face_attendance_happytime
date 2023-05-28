import React, { useEffect, useState } from "react";
import ShiftTable from "../components/ShiftTable";
import ShiftSearchPannel from "../components/ShiftSearchPannel";
import { useForm } from "react-hook-form";
import useThrottle from "hooks/useThrottle";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersGetListShifts } from "store/slices/Main/Shifts/actions/extraReducers";
import { ShiftSeachParams } from "store/slices/Main/Shifts/shiftsSlice";

const defaultParams = {
  keyword: "",
  page: 0,
  size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as ShiftSeachParams

const ListShifts: React.FC = () => {
  const { control, getValues, watch, } = useForm({
    defaultValues: defaultParams
  });

  const dispatch = useAppDispatch();
  const searchParams = watch();

  const handleSearch = useThrottle(() => {
    dispatch(extraReducersGetListShifts(getValues()))
  }, 500)

  useEffect(() => {
    handleSearch();
  }, [searchParams])

  return (
    <>
      <div className="ListShifts__wrapper">
        <ShiftSearchPannel control={control} />
        <ShiftTable control={control} />
      </div>
    </>
  )
}

export default ListShifts;

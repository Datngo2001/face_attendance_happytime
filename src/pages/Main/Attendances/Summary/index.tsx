import { useForm } from "react-hook-form";
import ControlPanel from "./components/ControlPanel";
import "./styles.scss";
import { useEffect } from "react";
import useThrottle from "hooks/useThrottle";
import { useAppDispatch } from "hooks/useAppDispatch";
import { ReportSearchParams } from "store/slices/Main/Report/reportsSlice";
import { extraReducersGetListReport } from "store/slices/Main/Report/actions/extraReducers";
import Table from "./components/Table";

const defaultParams = {
  agent_id: "",
  date_range: {
    from: Date.now(),
    to: null,
  },
  page: 0,
  size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as ReportSearchParams

const Summary = () => {
  const { control, setValue, getValues, trigger, watch } = useForm({
    defaultValues: defaultParams
  });
  const dispatch = useAppDispatch();
  const searchParams = watch();

  const handleSearch = useThrottle(() => {
    dispatch(extraReducersGetListReport(getValues()))
  }, 500)

  useEffect(() => {
    handleSearch();
  }, [searchParams])

  useEffect(() => {
    dispatch(extraReducersGetListReport(getValues()))
  }, [])

  return (
    <>
      <div className="attendances--summary__wrapper">
        <ControlPanel
          control={control}
          setValue={setValue}
          trigger={trigger}
        />
        <Table watch={watch} control={control} />
      </div>
    </>
  );
};

export default Summary;

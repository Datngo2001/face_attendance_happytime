import ChipCustom from "components/ChipCustom"
import { DataFormat, ViewFormat } from "components/InputTime/default"
import dayjs from "dayjs"
import { useMemo } from "react"
import { ShiftsByDate } from "store/slices/Main/ShiftAssignmentsResult/shiftAssignmentsResultSlice"
import './styles.scss'

export type Props = {
    shifts_by_date: ShiftsByDate[]
    date: string
}

export const ResultCell: React.FC<Props> = ({ shifts_by_date, date }) => {
    const shiftResult = useMemo(() => shifts_by_date.find(x => x.date === date), [shifts_by_date, date])
    return (
        <div className="result-cell__wrapper">
            {shiftResult && (<>
                <ChipCustom
                    className="time"
                    type={2}
                    label={`${dayjs(shiftResult.start, DataFormat).format(ViewFormat)} - ${dayjs(shiftResult.end, DataFormat).format(ViewFormat)}`} />
                <ChipCustom
                    className="shift-name"
                    type={2}
                    label={`${shiftResult.shift_name}`} />
            </>)}
        </div>
    )
}
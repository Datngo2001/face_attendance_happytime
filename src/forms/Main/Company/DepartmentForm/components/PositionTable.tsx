import ButtonCustom from 'components/ButtonCustom';
import React, { useEffect, useMemo, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Position } from 'store/slices/Main/Departments/departmentsSlice';
import InputCustom from 'components/InputCustom';
import CheckboxCustom from 'components/CheckboxCustom';
import ClearIcon from '@mui/icons-material/Clear';
import { defaultValuesPostion } from '../defaultValues';

export type Props = {
    control: any
    setValue: any
    getValues: any
    watch: any
}

const PositionTable: React.FC<Props> = ({ control, setValue, getValues, watch }) => {

    const [positions, setPositions] = useState<Position[]>(getValues("positions"));

    const handleCreateClick = () => {
        setValue("positions", [...positions, defaultValuesPostion])
    }

    const handleRemoveClick = (index: number) => {
        let newVal = [...positions]
        newVal.splice(index, 1)
        setValue("positions", newVal)
    }

    useEffect(() => {
        setPositions(getValues("positions"))
    }, [watch("positions")])

    return (
        <div className='position-table__wrapper'>
            <div className='position-table-row'>
                <div className='position-table-column column-no'>#</div>
                <div className='position-table-column column-name'>Vị trí công việc</div>
                <div className='position-table-column column-code'></div>
                <div className='position-table-column column-delete'></div>
                <div className='position-table-column column-is-manager'>Quản lý</div>
            </div>
            {positions.map((position, index) => (
                <div className='position-table-row' key={index}>
                    <div className='position-table-column column-no'>{index + 1}</div>
                    <div className='position-table-column column-name'>
                        <InputCustom name={`positions.${index}.position_name`} placeholder='Nhập vị trí thuộc phòng ban' control={control} />
                    </div>
                    <div className='position-table-column column-code'>
                        <InputCustom name={`positions.${index}.position_code`} placeholder='Mã vị trí' control={control} />
                    </div>
                    <div className='position-table-column column-delete'>
                        <ButtonCustom type={2} icon={<ClearIcon />} onClick={() => handleRemoveClick(index)} disabled={positions.length === 1} ></ButtonCustom>
                    </div>
                    <div className='position-table-column column-is-manager'>
                        <CheckboxCustom name={`positions.${index}.is_manager`} label={''} control={control} />
                    </div>
                </div>
            ))}
            <div className='position-table-row'>
                <div className='position-table-column column-no'></div>
                <div className='position-table-column column-name'>
                    <ButtonCustom type={2} icon={<AddIcon />} onClick={handleCreateClick}>Thêm vị trí công việc</ButtonCustom>
                </div>
                <div className='position-table-column column-code'></div>
                <div className='position-table-column column-delete'></div>
                <div className='position-table-column column-is-manager'></div>
            </div>
        </div>
    )
}

export default PositionTable
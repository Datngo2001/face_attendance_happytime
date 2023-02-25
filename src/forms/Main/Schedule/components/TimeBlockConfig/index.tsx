import InputCustom from 'components/InputCustom'
import React, { useEffect, useMemo } from 'react'
import { useForm } from 'react-hook-form';

export type Props = {
    onChange: any
    value: any
    radioName: string
}

const TimeBlockConfig: React.FC<Props> = ({ onChange, value, radioName }) => {
    const redioMinuteId = useMemo(() => `${radioName}_minute`, [radioName])
    const redioBlockId = useMemo(() => `${radioName}_block`, [radioName])

    const { register: blockRegister, watch, getValues } = useForm({ defaultValues: { block: 10 } });

    useEffect(() => {
        onChange(getValues("block"))
    }, [watch("block")])

    return (
        <>
            <div className="radio">
                <input
                    name={radioName}
                    type="radio"
                    id={redioMinuteId}
                    defaultChecked
                    onChange={() => onChange("")}
                />
                <label htmlFor={redioMinuteId}>
                    Tính theo số phút
                </label>
            </div>
            <div className="radio">
                <input
                    name={radioName}
                    type="radio"
                    id={redioBlockId}
                    onChange={() => { onChange(getValues("block")) }}
                    checked={value === "" ? false : true}
                />
                <label htmlFor={redioBlockId}>
                    Tính theo block
                </label>
                <InputCustom
                    width='50px'
                    name="block"
                    type='number'
                    min="1"
                    max="60"
                    register={blockRegister} />
                <label htmlFor="block">
                    phút
                </label>
            </div>
            <p>Số phút bạn nhập sẽ được tính là 1 Block.</p>
            <p>VD: 10 phút = 1 Block</p>
        </>
    )
}

export default TimeBlockConfig
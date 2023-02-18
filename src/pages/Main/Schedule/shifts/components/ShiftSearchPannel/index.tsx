import React from 'react'

const ShiftSearchPannel: React.FC = () => {
    return (
        <>
            <div className="ListShifts__control-panel">
                {/* <form className="index__actions">
                    <SelectCustom
                        id="statusActive"
                        className="input-item"
                        register={register}
                        defaultValue={1}
                        options={listStatusActive}
                    />
                    <SelectCustom
                        id="statusEmployee"
                        className="input-item"
                        register={register}
                        placeholder="Trạng thái nhân sự"
                        options={listStatusEmployees}
                    />
                    <InputCustom
                        id="searchData"
                        iconRight={<SearchRoundedIcon />}
                        className="input-item flex-basic-25"
                        placeholder="Tên, email, số điện thoại, mã nhân viên"
                        register={register}
                    />
                </form> */}
            </div>
        </>
    )
}

export default ShiftSearchPannel;
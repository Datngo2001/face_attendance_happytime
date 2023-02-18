import React from 'react'
import "./styles.scss"
import TabsCustom from 'components/TabsCustom'
import { listTabs } from './listTabs'

const Shifts: React.FC = () => {
    return (
        <>
            <div className="shifts__wrapper">
                <TabsCustom listChildren={listTabs} />
            </div>
        </>
    )
}

export default Shifts
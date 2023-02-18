import React from 'react'
import "./styles.scss"
import TabsCustom from 'components/TabsCustom'
import { listTabs } from './listTabs'

const Shifts: React.FC = () => {
    return (
        <>
            <div className="">
                <TabsCustom listChildren={listTabs} />
            </div>
        </>
    )
}

export default Shifts
import React from 'react'
import ControlPanel from './Components/ControlPanel'
import Table from './Components/Table'

const Bssid: React.FC = () => {
    return (
        <>
            <div className="attendance-settings--mobile-gps__wrapper">
                <ControlPanel />
                <Table />
            </div>
        </>
    )
}

export default Bssid
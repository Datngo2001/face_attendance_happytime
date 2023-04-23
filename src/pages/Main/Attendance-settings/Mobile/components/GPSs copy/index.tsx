import React from 'react'
import ControlPanel from './Components/ControlPanel'
import Table from './Components/Table'

const GPSs: React.FC = () => {
    return (
        <>
            <div className="attendance-settings--mobile-gps__wrapper">
                <ControlPanel />
                <Table />
            </div>
        </>
    )
}

export default GPSs
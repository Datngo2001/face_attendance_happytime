import React from 'react'
import { ControlPanel, Table } from './Components'

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
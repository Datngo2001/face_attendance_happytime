import ButtonCustom from 'components/ButtonCustom';
import React, { ReactElement } from 'react'
import { useGeolocated } from "react-geolocated";

type Props = {
    icon?: ReactElement,
    onChange?: any,
    children?: any,
}

const GetPositionButton: React.FC<Props> = ({ children, icon, onChange }) => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <ButtonCustom type={2} icon={icon} onClick={() => onChange({ lat: coords.latitude, lon: coords.longitude, radius: coords.accuracy })}>{children}</ButtonCustom>
    ) : (
        <div>Getting the location data & hellip; </div >
    );
}

export default GetPositionButton
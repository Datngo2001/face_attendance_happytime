import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ButtonCustom from "components/ButtonCustom";

export type Props = {
    isOpen: boolean
    features: string[]
    onFeatureGroupClick?: any
}

const FeatureCell: React.FC<Props> = ({ isOpen, features, onFeatureGroupClick }) => {
    return (
        <div className="feature-cell__wrapper">
            <ButtonCustom
                icon={isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
                type={3}
                onClick={onFeatureGroupClick}
            >
                {features[0]}
            </ButtonCustom>
            {isOpen && features.map((feature, index) => {
                if (index === 0) return null;
                return (<div key={index} className="feature">{feature}</div>)
            })}
        </div>
    )
}

export default FeatureCell
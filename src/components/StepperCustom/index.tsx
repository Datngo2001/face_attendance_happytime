import { Step, StepLabel, Stepper } from '@mui/material';
import React, { ReactNode } from 'react'
import "./styles.scss"

export type Props = {
    activeStep: number
    steps: StepItem[]
    stepContents: ReactNode[];
    width?: string
    contentWidth?: string
    onStepClick?: any
}

export type StepItem = {
    label: string
    isComplete: boolean
}

const StepperCustom: React.FC<Props> = ({ steps, stepContents, activeStep = 0, width, contentWidth, onStepClick }) => {
    return (
        <div className='stepper-custom__wrapper'>
            <div className='stepper-custom' style={{ width: width ?? "auto" }}>
                <Stepper activeStep={activeStep} >
                    {
                        steps.map((step, index) => (
                            <Step key={step.label} completed={step.isComplete} onClick={onStepClick ? () => onStepClick(index) : () => { }}>
                                <StepLabel>{step.label}</StepLabel>
                            </Step>
                        ))
                    }
                </Stepper >
            </div>
            <div className='stepper-custom-content' style={{ width: contentWidth ?? "auto" }}>
                {stepContents[activeStep]}
            </div>
        </div>
    );
}

export default StepperCustom
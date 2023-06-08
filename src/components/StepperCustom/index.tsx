import { Step, StepLabel, Stepper } from '@mui/material';
import React, { ReactNode } from 'react'
import "./styles.scss"

type Props = {
    activeStep: number
    steps: StepItem[]
    stepContents: ReactNode[];
    maxWidth?: string
    contentWidth?: string
    onStepClick?: any
}

export type StepItem = {
    label: string
    isComplete: boolean
}

const StepperCustom: React.FC<Props> = ({ steps, stepContents, activeStep = 0, maxWidth, contentWidth, onStepClick }) => {
    return (
        <div className='stepper-custom__wrapper'>
            <div className='stepper-custom' style={{ maxWidth: maxWidth ?? "auto" }}>
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
            <div className='stepper-custom-content' style={{ maxWidth: contentWidth ?? "auto" }}>
                {stepContents[activeStep]}
            </div>
        </div>
    );
}

export default StepperCustom
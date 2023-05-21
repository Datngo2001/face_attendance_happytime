import StepperCustom, { StepItem } from 'components/StepperCustom'
import { FormAction } from 'forms/formAction'
import React, { useState } from 'react'
import { ShiftAssignment } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import useCRUDForm from 'hooks/useCRUDForm'
import { schema } from './validator'
import { defaulValues } from './defaulValues'

export type Props = {
    shiftAssignment?: ShiftAssignment
    action?: FormAction
}

const stepsDefault: StepItem[] = [
    {
        label: "Tiêu đề và Đối tượng áp dụng",
        isComplete: false
    },
    {
        label: "Thời gian phân ca làm việc",
        isComplete: false
    },
]

const ShiftAssignmentForm: React.FC<Props> = ({ action, shiftAssignment }) => {
    const { control, trigger } = useCRUDForm({
        defaultValues: defaulValues,
        validationSchema: schema
    });

    const [steps, setSteps] = useState(stepsDefault);
    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => {
        setActiveStep(val => val + 1)
    }

    const handleStepClick = async (index) => {
        var isValid = await trigger(["name"])
        if (isValid) {
            setActiveStep(val => index)
        }
    }

    return (
        <div>
            <StepperCustom
                width='50%'
                contentWidth='50%'
                activeStep={activeStep}
                steps={steps}
                onStepClick={handleStepClick}
                stepContents={[
                    (<Step1 nextStep={nextStep} control={control} />),
                    (<Step2 nextStep={nextStep} />),
                ]} />
        </div>
    )
}

export default ShiftAssignmentForm
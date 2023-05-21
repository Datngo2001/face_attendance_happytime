import StepperCustom, { StepItem } from 'components/StepperCustom'
import { FormAction } from 'forms/formAction'
import React, { useEffect, useState } from 'react'
import { ShiftAssignment } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import useCRUDForm from 'hooks/useCRUDForm'
import { schema } from './validator'
import { defaulValues } from './defaulValues'
import { useAppSelector } from 'hooks/useAppSelector'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { extraReducersGetDepartmentAndPositionList } from 'store/slices/Main/Departments/actions/extraReducers'
import { SelectBoxOption } from 'components/SelectCustom'
import { Department, Position } from 'store/slices/Main/Departments/departmentsSlice'
import { extraReducersGetListEmployees } from 'store/slices/Main/Employees/actions/extraReducers'
import { Employee } from 'store/slices/Main/Employees/employeesSlice'
import "./styles.scss"

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
    const { departments, positions } = useAppSelector(state => state.departments)
    const { listOfEmployees } = useAppSelector(state => state.employees)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(extraReducersGetDepartmentAndPositionList());
        dispatch(extraReducersGetListEmployees({
            page: 0,
            size: process.env.REACT_APP_PAGE_SIZE,
        }));
    }, [])

    const { control, trigger, watch, handleSubmit, setValue } = useCRUDForm({
        defaultValues: defaulValues,
        validationSchema: schema
    });

    const [activeStep, setActiveStep] = useState(0);

    const nextStep = () => {
        setActiveStep(val => val + 1)
    }

    const handleStepClick = async (index) => {
        var isValid = await trigger(["name", "apply_for"])
        if (isValid) {
            setActiveStep(val => index)
        }
    }

    const handelSubmitCreate = (data) => {
        console.log(data)
    }

    return (
        <div className='shift-assignment-form__wrapper'>
            <StepperCustom
                maxWidth='50%'
                contentWidth='50%'
                activeStep={activeStep}
                steps={stepsDefault}
                onStepClick={handleStepClick}
                stepContents={[
                    (<Step1 nextStep={nextStep} control={control} watch={watch}
                        departmentOptions={getDepartmentSelectOptions(departments)}
                        positionOptions={getPositionSelectOptions(positions)}
                        employeeOptions={getEmployeeSelectOptions(listOfEmployees)} />),
                    (<Step2 nextStep={nextStep}
                        watch={watch}
                        control={control}
                        setValue={setValue}
                        handleSubmit={handleSubmit(handelSubmitCreate)} />),
                ]} />
        </div>
    )
}

function getDepartmentSelectOptions(departments: Department[]): SelectBoxOption[] {
    return departments.map(department => ({
        id: department.id,
        name: department.department_name
    } as SelectBoxOption))
}

function getPositionSelectOptions(positions: Position[]): SelectBoxOption[] {
    return positions.map(department => ({
        id: department.id,
        name: department.position_name
    } as SelectBoxOption))
}

function getEmployeeSelectOptions(employees: Employee[]): SelectBoxOption[] {
    return employees.map(employee => ({
        id: employee._id,
        name: employee.name
    } as SelectBoxOption))
}

export default ShiftAssignmentForm
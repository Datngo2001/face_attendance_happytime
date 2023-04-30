import { useAppDispatch } from "hooks/useAppDispatch";
import "./styles.scss";
import { useEffect, useState } from "react";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";
import { useAppSelector } from "hooks/useAppSelector";
import DepartmentNode from "./components/DepartmentNode";
import ButtonCustom from "components/ButtonCustom";
import ModalCustom from "components/ModalCustom";
import { FormAction } from "forms/formAction";
import DepartmentForm from "forms/Main/Company/DepartmentForm";
import AddIcon from '@mui/icons-material/Add';

const Structure: React.FC = () => {
    const [modalState, setModalState] = useState({
        open: false,
        action: FormAction.CREATE
    })
    const dispatch = useAppDispatch();
    const { departmentTrees, total_department, total_position, lastCreateSuccess } = useAppSelector(state => state.departments)

    useEffect(() => {
        dispatch(extraReducersGetDepartments());
    }, [])

    useEffect(() => {
        setModalState(val => ({
            ...val,
            open: false,
        }))
        dispatch(extraReducersGetDepartments());
    }, [lastCreateSuccess])

    const openCreateModal = () => {
        setModalState(val => ({
            ...val,
            open: true,
            action: FormAction.CREATE
        }))
    }

    const openUpdateModal = () => {
        setModalState(val => ({
            ...val,
            open: true,
            action: FormAction.UPDATE
        }))
    }

    return (
        <div className="company-structure__wrapper">
            <div className="content-title">
                <span>Cơ cấu tổ chức</span>
                <div className="action">
                    <ButtonCustom type={2} onClick={openCreateModal} icon={<AddIcon />}>THÊM</ButtonCustom>
                </div>
            </div>
            <div className="total">Có {total_department} phòng ban và {total_position} vị trí</div>
            <div className="department-tree__wrapper">
                {departmentTrees?.map(rootDepartment => (
                    <DepartmentNode key={rootDepartment.id} department={rootDepartment} depth={1} />
                ))}
            </div>
            <ModalCustom
                titleHeader={"THÊM PHÒNG BAN MỚI"}
                footer={false}
                state={modalState.open}
                setState={(isOpen) => setModalState(val => ({ ...val, open: isOpen }))}
                callback={() => { }}>
                <DepartmentForm action={modalState.action} setOpen={(isOpen) => setModalState(val => ({ ...val, open: isOpen }))} />
            </ModalCustom>
        </div>
    );
};

export default Structure;

import { useAppDispatch } from "hooks/useAppDispatch";
import "./styles.scss";
import { useEffect } from "react";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";
import { useAppSelector } from "hooks/useAppSelector";
import DepartmentNode from "./components/DepartmentNode";
import ButtonCustom from "components/ButtonCustom";
import ModalCustom from "components/ModalCustom";
import DepartmentForm from "forms/Main/Company/DepartmentForm";
import AddIcon from '@mui/icons-material/Add';
import { Department, setCurrentDepartment } from "store/slices/Main/Departments/departmentsSlice";
import useCRUDModal from "hooks/useCRUDModal";
import { FormAction } from "forms/formAction";

const Structure: React.FC = () => {
    const { modalState, openCreateModal, openUpdateModal, closeModal, setOpenState } = useCRUDModal({ defaultOpen: false });
    const dispatch = useAppDispatch();
    const { departmentTrees, total_department, total_position, lastCreateSuccess, lastDeleteSuccess, lastUpdateSuccess } = useAppSelector(state => state.departments)

    useEffect(() => {
        closeModal();
        dispatch(extraReducersGetDepartments());
    }, [lastCreateSuccess, lastDeleteSuccess, lastUpdateSuccess])


    const handleOpenUpdateModal = (department: Department) => {
        dispatch(setCurrentDepartment({ department }))
        openUpdateModal();
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
                    <DepartmentNode key={rootDepartment.id} handleUpdate={handleOpenUpdateModal} department={rootDepartment} depth={1} />
                ))}
            </div>
            <ModalCustom
                titleHeader={modalState.action === FormAction.CREATE ? "THÊM PHÒNG BAN MỚI" : "CHỈNH SỬA PHÒNG BAN"}
                footer={false}
                state={modalState.open}
                setState={setOpenState}
                callback={() => { }}>
                <DepartmentForm action={modalState.action} setOpen={setOpenState} />
            </ModalCustom>
        </div>
    );
};

export default Structure;

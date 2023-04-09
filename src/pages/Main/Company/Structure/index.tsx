import { useAppDispatch } from "hooks/useAppDispatch";
import "./styles.scss";
import { useEffect } from "react";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";
import { useAppSelector } from "hooks/useAppSelector";
import DepartmentNode from "./components/DepartmentNode";

const Structure: React.FC = () => {
    const dispatch = useAppDispatch();
    const { departmentTrees, total_department, total_position } = useAppSelector(state => state.departments)

    useEffect(() => {
        dispatch(extraReducersGetDepartments());
    }, [])

    return (
        <div className="company-structure__wrapper">
            <div className="content-title">Cơ cấu tổ chức</div>
            <div className="total">Có {total_department} phòng ban và {total_position} vị trí</div>
            <div className="department-tree__wrapper">
                {departmentTrees?.map(rootDepartment => (
                    <DepartmentNode key={rootDepartment.id} department={rootDepartment} depth={1} />
                ))}
            </div>
        </div>
    );
};

export default Structure;

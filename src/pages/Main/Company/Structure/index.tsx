import { useAppDispatch } from "hooks/useAppDispatch";
import "./styles.scss";
import { useEffect } from "react";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";

const Structure: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(extraReducersGetDepartments());
    }, [])

    return (
        <>
            <div className="company--structure__wrapper">
                <div className="content-title">Cơ cấu tổ chức</div>
            </div>
        </>
    );
};

export default Structure;

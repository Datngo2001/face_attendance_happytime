import { convertRoleIdToTitle } from "../../../../../../../utils/convertFunctions";
import "./styles.scss";

const ColumnRole = ({ role }) => {
    return (
        <>
            <div className="column-role__wrapper">{convertRoleIdToTitle(role)}</div>
        </>
    );
};

export default ColumnRole;

import "./styles.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export const ColumnName = ({ img, name, role }) => {
    // ARROW FUNCTIONS
    // ****************************

    return (
        <>
            <div className="column-name">
                {!img ? (
                    <span className="img-default">
                        <PersonRoundedIcon />
                    </span>
                ) : (
                    <img src="" alt="" className="img" />
                )}
                <div className="name-role">
                    <p className="name">{name}</p>
                    {/* <p className="role">{convertRoleIdToTitle(role)}</p> */}
                </div>
                {/* <Tooltip arrow placement="top" title={convertRoleIdToTitle(role)}>
                    <span className="icon">
                        <ManageAccountsRoundedIcon />
                    </span>
                </Tooltip> */}
            </div>
        </>
    );
};

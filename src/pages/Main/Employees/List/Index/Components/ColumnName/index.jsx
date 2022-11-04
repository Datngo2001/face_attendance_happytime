import "./styles.scss";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { Tooltip } from "@mui/material";

export const ColumnName = ({ img, name, role }) => {
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
                    <p className="role">{role}</p>
                </div>
                <Tooltip arrow placement="top" title={role}>
                    <span className="icon">
                        <ManageAccountsRoundedIcon />
                    </span>
                </Tooltip>
            </div>
        </>
    );
};

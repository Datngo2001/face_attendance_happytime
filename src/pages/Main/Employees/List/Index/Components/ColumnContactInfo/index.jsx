import "./styles.scss";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { Tooltip } from "@mui/material";

export const ColumnContactInfo = ({ email, phone }) => {
    return (
        <>
            <div className="column-contact-Inf">
                <div className="email">
                    <span className="icon">
                        <LocalPostOfficeRoundedIcon />
                    </span>
                    <Tooltip arrow placement="top" title={email}>
                        <p className="text">{email}</p>
                    </Tooltip>
                </div>
                <div className="phone">
                    <span className="icon">
                        <LocalPhoneRoundedIcon />
                    </span>
                    <Tooltip arrow placement="top" title={phone}>
                        <p className="text">{phone}</p>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};

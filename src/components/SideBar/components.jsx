import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.scss";

export const NavigatorItem = ({ linkTo, icon, title, state }) => {
    return (
        <>
            {state ? (
                <Tooltip
                    className="toolTipNavigatorItem"
                    title={title}
                    placement="right"
                    arrow
                    disableHoverListener
                >
                    <Link to={linkTo} className="navigator-item__wrapper">
                        {icon} <span className="title">{title}</span>
                    </Link>
                </Tooltip>
            ) : (
                <Tooltip
                    className="toolTipNavigatorItem"
                    title={title}
                    placement="right"
                    arrow
                >
                    <Link to={linkTo} className="navigator-item__wrapper">
                        {icon} <span className="title">{title}</span>
                    </Link>
                </Tooltip>
            )}
        </>
    );
};

import "./styles.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export const ColumnName = ({ img, name }) => {
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
                    <img src={img} alt="" className="img" />
                )}
                <div className="name-role">
                    <p className="name">{name}</p>
                </div>
            </div>
        </>
    );
};

import "./styles.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

type Props = {
    img: string
    name: string
    id: string
}

const ColumnName = ({ img, name, id }) => {
    return (
        <>
            <div className="attendances--summary--table--column-name__wrapper">
                <div className="img">
                    {img ? (
                        <img src={img} alt="" />
                    ) : (
                        <div className="icon">
                            <PersonRoundedIcon />
                        </div>
                    )}
                </div>
                <div className="name-id">
                    <p className="name">{name}</p>
                    <p className="id">{id}</p>
                </div>
            </div>
        </>
    );
};

export default ColumnName;

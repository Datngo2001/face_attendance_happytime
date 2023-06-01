import "./styles.scss";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

export type Props = {
    img: string
    name: string
    position: string
}

const ColumnName: React.FC<Props> = ({ img, name, position }) => {
    return (
        <>
            <div className="column-name__wrapper">
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
                    <p className="position">{position}</p>
                </div>
            </div>
        </>
    );
};

export default ColumnName;

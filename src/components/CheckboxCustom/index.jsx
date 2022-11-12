import "./styles.scss";

const CheckboxCustom = ({ id, register, width, height }) => {
    return (
        <>
            <input
                id={id}
                className="checkbox-custom__wrapper"
                style={{ width: width, height: height }}
                type="checkbox"
                {...register(id)}
            />
        </>
    );
};

export default CheckboxCustom;

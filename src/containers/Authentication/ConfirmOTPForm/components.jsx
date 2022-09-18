import "./styles.scss";

export const InputCode = ({ register, id }) => {
    return (
        <>
        <input {...register(id)} className="input-code__wrapper" maxLength="1" />
        </>
    );
};

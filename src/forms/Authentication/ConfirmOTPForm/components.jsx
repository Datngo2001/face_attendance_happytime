import "./styles.scss";

export const InputCode = ({ register, id }) => {
    return (
        <>
            <input
                {...register(id)}
                id={id}
                onInput={(e) => {
                    e.target.value = e.target.value
                        .replace(/[^0-9.]/g, "")
                        .replace(/(\..*?)\..*/g, "$1");
                    if (e.target.value.length === 1) {
                        document.getElementById(parseInt(id) + 1) &&
                            document.getElementById(parseInt(id) + 1).focus();
                    }
                }}
                className="input-code__wrapper"
                maxLength="1"
            />
        </>
    );
};

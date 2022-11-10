export const titleHeaderMain = (title) => {
    return (
        document.getElementById("titleHeaderMain") &&
        (document.getElementById("titleHeaderMain").innerText = title)
    );
};

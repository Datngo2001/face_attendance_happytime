export const authAccount = () => {
    if (sessionStorage.getItem("isLoggedIn") && sessionStorage.getItem("token")) {
        return true;
    }
    return false;
};

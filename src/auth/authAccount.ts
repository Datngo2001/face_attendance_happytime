export const authAccount = () => {
  if (
    sessionStorage.getItem("isLoggedIn") === "true" &&
    sessionStorage.getItem("token")
  ) {
    return true;
  }
  return false;
};

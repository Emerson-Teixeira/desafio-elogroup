import { errorToast, successToast } from "../utils/toasts";

export const isRegister = (user) => {
  const arrayUsers = JSON.parse(localStorage.getItem("users-elogroup"));
  if (!arrayUsers) {
    errorToast(null, "not-register");
    localStorage.setItem("isLoggedEloGroup", false);
    return false;
  }
  if (
    arrayUsers.find((element) => {
      if (element.user === user.user && element.password === user.password) {
        return true;
      } else return false;
    })
  ) {
    localStorage.setItem("isLoggedEloGroup", true);
    localStorage.setItem("userEloGroup", JSON.stringify(user));
    window.location = "/";
    successToast("Login realizado com sucesso");
    return true;
  } else {
    errorToast(null, "not-register");
    localStorage.setItem("isLoggedEloGroup", false);
    return false;
  }
};

export const logout = (user) => {
  localStorage.removeItem("isLoggedEloGroup");
  localStorage.removeItem("userEloGroup");
  window.location = "/login";
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("userEloGroup"));
};

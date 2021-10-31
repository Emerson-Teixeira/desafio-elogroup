export const isRegister = (user) => {
  try {
    function checkForm(form) {
      const errors = {
        user: false,
        false: false,
      };
      if (!form.user) {
        errors.user = true;
      }
      if (!form.password) {
        errors.password = true;
      }
      if (errors.password || errors.user) {
        return {
          errors,
          hasErrors: true,
          message: "Preencha os campos corretamente",
        };
      }
      return {
        errors,
        hasErrors: false,
        message: "",
      };
    }

    const { errors, hasErrors, message } = checkForm(user);
    if (hasErrors) {
      return { errors, hasErrors, message };
    }

    const arrayUsers = JSON.parse(localStorage.getItem("users-elogroup"));
    if (!arrayUsers) {
      throw Error;
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
      return { errors: false, message: "Login Realizado com Sucesso!" };
    } else {
      throw Error;
    }
  } catch (error) {
    localStorage.setItem("isLoggedEloGroup", false);
    localStorage.removeItem("userEloGroup");
    return {
      errors: true,
      message: "Não Foi possivel Encontrar o usuario!",
    };
  }
};

export const logout = () => {
  try {
    localStorage.removeItem("isLoggedEloGroup");
    localStorage.removeItem("userEloGroup");
    return { error: false, message: "Login realizado com sucesso" };
  } catch (error) {
    return { error: true, message: "Não foi possivel realizar o logout" };
  }
};

export const getUser = () => {
  try {
    const user = JSON.parse(localStorage.getItem("userEloGroup"));
    if (!user) {
      throw Error;
    }
    return {
      user,
      error: false,
      message: "Usuario Encontrado",
    };
  } catch (error) {
    return { user: null, error: "true" };
  }
};

export const createUser = (user) => {
  try {
    function validateUser(form) {
      function checkPassword(password) {
        let regex =
          /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,}$/;
        if (regex.test(password)) {
          return true;
        } else {
          return false;
        }
      }
      const errors = {
        user: false,
        false: false,
        confirmPassword: false,
      };
      if (!form.user) {
        errors.user = true;
      }
      if (!checkPassword(form.password)) {
        errors.password = true;
      }
      if (form.password !== form.confirmPassword || !form.confirmPassword) {
        errors.confirmPassword = true;
      }
      if (errors.password || errors.user || errors.confirmPassword) {
        return { hasErrors: true, errors };
      }
      return { hasErrors: false, errors };
    }
    const { hasErrors, errors } = validateUser(user);
    if (!hasErrors) {
      let prevUsers = JSON.parse(localStorage.getItem("users-eloGroup"));
      if (prevUsers)
        localStorage.setItem(
          "users-elogroup",
          JSON.stringify([
            ...prevUsers,
            { user: user.user, password: user.password },
          ])
        );
      else {
        localStorage.setItem(
          "users-elogroup",
          JSON.stringify([{ user: user.user, password: user.password }])
        );
      }
      return {
        message: "Usuario Criado com sucesso",
        hasErrors,
        errors,
      };
    } else {
      throw errors;
    }
  } catch (error) {
    if (Object.keys(error).includes("user"))
      return {
        message: "Não Foi Possivel criar o usuario",
        hasErrors: true,
        errors: error,
      };
    else {
      return {
        message: "Não Foi Possivel criar o usuario",
        hasErrors: true,
        errors: null,
      };
    }
  }
};

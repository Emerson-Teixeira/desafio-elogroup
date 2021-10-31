import { useContext, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../components/Logo";
import { ThemeContext } from "../../Contexts/themeContext";
import { isRegister } from "../../utils/auth";
import { errorToast } from "../../utils/toasts";
import {
  Container,
  CustomButton,
  CustomSpan,
  FormField,
  FormWrapper,
} from "./styles";

export default function CreateUser(props) {
  let regex =
    /^(?=.*[@!#$%^&*()/\\])(?=.*[0-9])(?=.*[a-zA-Z])[@!#$%^&*()/\\a-zA-Z0-9]{8,}$/;
  const { theme, setTheme } = useContext(ThemeContext);
  const [showRedirect, setShowRedirect] = useState(false);
  const [form, setForm] = useState({
    user: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState({
    user: false,
    password: false,
    confirmPassword: false,
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    if (checkForm(form)) {
      let prevUsers = JSON.parse(localStorage.getItem("users-eloGroup"));
      if (prevUsers)
        localStorage.setItem(
          "users-elogroup",
          JSON.stringify([
            ...prevUsers,
            { user: form.user, password: form.password },
          ])
        );
      else {
        localStorage.setItem(
          "users-elogroup",
          JSON.stringify([{ user: form.user, password: form.password }])
        );
      }
      if (
        isRegister({
          user: form.user,
          password: form.password,
        })
      ) {
        return props.history.push("/");
      }
    }
    return;
  }
  function checkPassword(password) {
    if (regex.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  function checkForm(form) {
    const errors = {
      user: false,
      false: false,
      confirmPassword: false,
    };
    if (!form.user) {
      errors.user = true;
      errorToast("O usuario não pode ficar vazio");
    }
    if (!checkPassword(form.password)) {
      errors.password = true;
      errorToast("A senha não atende a todos os requisitos");
    }
    if (form.password !== form.confirmPassword) {
      errors.confirmPassword = true;
      errorToast("As senhas não são iguais");
    }
    if (errors.password || errors.user || errors.confirmPassword) {
      setFormError(errors);
      return false;
    }
    setFormError(errors);
    return true;
  }

  return (
    <Container>
      <>
        <FormWrapper>
          {" "}
          <Logo history={props.history} />
          <FormField error={formError.user}>
            <label>Usuario * </label>
            <input
              type="text"
              onChange={handleForm}
              name="user"
              placeholder="Digite seu usuario"
              autocomplete="off"
              value={form.user}
            />
          </FormField>
          <FormField error={formError.password}>
            <label>Senha *</label>
            <input
              type="password"
              onChange={handleForm}
              name="password"
              placeholder="*******"
              autocomplete="off"
              value={form.password}
            />
          </FormField>
          <FormField error={formError.confirmPassword}>
            <label>Confirmar Senha * </label>
            <input
              type="password"
              onChange={handleForm}
              name="confirmPassword"
              placeholder="*******"
              autocomplete="off"
              value={form.confirmPassword}
            />
          </FormField>
          <CustomButton onClick={handleRegister}>Registrar</CustomButton>
        </FormWrapper>
        <CustomSpan
          onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Alterar tema
        </CustomSpan>
        <CustomSpan onClick={(e) => setShowRedirect((prevState) => !prevState)}>
          Já possui uma conta? Faça login!
        </CustomSpan>
        {showRedirect ? <Redirect to="/login" /> : ""}
      </>
    </Container>
  );
}

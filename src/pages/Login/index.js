import { useContext, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../components/Logo";
import { ThemeContext } from "../../Contexts/themeContext";
import { isRegister } from "../../utils/auth";
import { errorToast, successToast } from "../../utils/toasts";
import {
  Container,
  CustomButton,
  CustomSpan,
  FormField,
  FormWrapper,
} from "./styles";

export default function Login(props) {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showRedirect, setShowRedirect] = useState(false);

  const [form, setForm] = useState({
    user: "",
    password: "",
  });

  const [formError, setFormError] = useState({
    user: false,
    password: false,
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

  function handleLogin(e) {
    e.preventDefault();
    const { hasErrors, errors, message } = isRegister(form);
    if (hasErrors) {
      setFormError(errors);
      errorToast("Preencha Corretamente os campos");
      return;
    } else {
      setFormError({
        user: "",
        password: "",
      });
    }
    if (errors) {
      errorToast(message);
      return;
    } else {
      successToast(message);
      props.history.push("/");
    }
  }

  return (
    <Container>
      <>
        <FormWrapper>
          {" "}
          <Logo history={props.history} />
          <FormField error={formError.user}>
            <label>Usuario</label>
            <input
              type="text"
              onChange={handleForm}
              name="user"
              placeholder="Digite seu usuario"
              autoComplete="off"
            />
          </FormField>
          <FormField error={formError.password}>
            <label>Senha</label>
            <input
              type="password"
              onChange={handleForm}
              name="password"
              placeholder="*******"
              autoComplete="off"
            />
          </FormField>
          <CustomButton onClick={handleLogin}>Entrar</CustomButton>
        </FormWrapper>
        <CustomSpan
          onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}
        >
          Alterar tema
        </CustomSpan>
        <CustomSpan onClick={(e) => setShowRedirect((prevState) => !prevState)}>
          Não possui conta? Registre-se!
        </CustomSpan>
        {showRedirect ? <Redirect to="/register" /> : ""}
      </>
    </Container>
  );
}

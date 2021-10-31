import { useContext, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Logo from "../../components/Logo";
import { ThemeContext } from "../../Contexts/themeContext";
import { createUser, isRegister } from "../../utils/auth";
import { errorToast, successToast } from "../../utils/toasts";
import {
  Container,
  CustomButton,
  CustomSpan,
  FormField,
  FormWrapper,
} from "./styles";

export default function CreateUser(props) {
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
  const handleClick = (e) => {
    e.preventDefault();
    const { message, hasErrors, errors } = createUser(form);
    if (errors) setFormError(errors);
    if (hasErrors) return errorToast(message);
    else {
      successToast(message);
      const { errors } = isRegister({
        user: form.user,
        password: form.password,
      });
      if (errors) props.history.push("/login");
      else props.history.push("/");
    }
  };

  const changeTheme = (e) => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

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
              autoComplete="off"
              value={form.user}
            />
            {formError.user && <span>Escolha um nome de usuário</span>}
          </FormField>
          <FormField error={formError.password}>
            <label>Senha *</label>
            <input
              type="password"
              onChange={handleForm}
              name="password"
              placeholder="*******"
              autoComplete="off"
              value={form.password}
            />
            {formError.password && (
              <span>
                A senha deve ter: ao menos 8 caracteres, um caracter especial,
                um caracter numérico e um caracter alfanumérico{" "}
              </span>
            )}
          </FormField>
          <FormField error={formError.confirmPassword}>
            <label>Confirmar Senha * </label>
            <input
              type="password"
              onChange={handleForm}
              name="confirmPassword"
              placeholder="*******"
              autoComplete="off"
              value={form.confirmPassword}
            />
            {formError.confirmPassword && (
              <span>As senhas devem ser iguais</span>
            )}
          </FormField>
          <CustomButton onClick={handleClick}>Registrar</CustomButton>
        </FormWrapper>
        <CustomSpan onClick={changeTheme}>Alterar tema</CustomSpan>
        <CustomSpan onClick={(e) => setShowRedirect((prevState) => !prevState)}>
          Já possui uma conta? Faça login!
        </CustomSpan>
        {showRedirect ? <Redirect to="/login" /> : ""}
      </>
    </Container>
  );
}

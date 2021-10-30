import Header from "../../components/header";
import Table from "./Components/Table";
import { errorToast } from "../../utils/toasts";
import { useState } from "react";
import {
  FormContainer,
  FormField,
  TableContent,
  DataContainer,
  CustomButton,
  Container,
} from "./styles";
import { saveLeads } from "../../utils/LeadsManager";
export default function CreateLead(props) {
  var regEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  let regPhone =
    /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

  const [tableOptions, setTableOptions] = useState(null);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    status: "0",
  });
  const [formError, setFormError] = useState({
    name: false,
    phone: false,
    email: false,
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function checkForm(form) {
    const errors = {
      name: false,
      phone: false,
      email: false,
      options: false,
    };
    if (!data.name) {
      errors.name = true;
      errorToast("O nome não pode ficar vazio");
    }
    if (!regPhone.test(data.phone)) {
      errors.phone = true;
      errorToast("Insira um telefone valido");
    }
    if (!regEmail.test(data.email)) {
      errors.email = true;
      errorToast("Insira um email valido");
    }
    if (!tableOptions.find((Element) => Element.status === true)) {
      errors.options = true;
      errorToast("É necessario escolher uma oportunidade para continuar");
    }
    if (errors.email || errors.name || errors.phone || errors.options) {
      setFormError(errors);
      return false;
    }
    setFormError(errors);
    return true;
  }

  function handleLead(e) {
    e.preventDefault();
    if (checkForm()) {
      if (
        saveLeads({
          ...data,
          oportunidades: tableOptions
            .filter((Element) => Element.status === true)
            .map((Element) => Element.tipo),
        })
      )
        props.history.push("/");
    }
  }
  return (
    <Container>
      <Header history={props.history} title="Novo Lead" />
      <FormContainer>
        <DataContainer>
          <FormField error={formError.name}>
            <label>Nome*</label>
            <input type="text" onChange={handleForm} name="name" />
          </FormField>
          <FormField error={formError.phone}>
            <label>Telefone*</label>
            <input type="text" onChange={handleForm} name="phone" />
          </FormField>
          <FormField error={formError.email}>
            <label>Email*</label>
            <input type="text" onChange={handleForm} name="email" />
          </FormField>
        </DataContainer>
        <TableContent>
          <label>Oportunidades *</label>
          <Table options={tableOptions} setOptions={setTableOptions} />
          <CustomButton onClick={handleLead}>Registrar</CustomButton>
        </TableContent>
      </FormContainer>
    </Container>
  );
}

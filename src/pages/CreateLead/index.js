import Header from "../../components/header";
import Table from "./Components/Table";
import { errorToast, successToast } from "../../utils/toasts";
import { useState } from "react";
import {
  FormContainer,
  FormField,
  TableContent,
  DataContainer,
  CustomButton,
  Container,
} from "./styles";
import { saveArrayLeads } from "../../utils/LeadsManager";
export default function CreateLead(props) {
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

  function handleLead(e) {
    e.preventDefault();
    const { hasErrors, message, errors } = saveArrayLeads(data, tableOptions);
    if (hasErrors) {
      setFormError(errors);
      errorToast(message);
      if (errors.options) {
        errorToast("É necessario escolher uma oportunidade");
      }
      return;
    }
    if (!hasErrors) {
      successToast(message);
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
            {formError.name && <span>É necessario digitar um nome</span>}
          </FormField>
          <FormField error={formError.phone}>
            <label>Telefone*</label>
            <input type="text" onChange={handleForm} name="phone" />
            {formError.phone && (
              <span>Digite um telefone valido! Ex: (XX) XXXXX-XXXX</span>
            )}
          </FormField>
          <FormField error={formError.email}>
            <label>Email*</label>
            <input type="text" onChange={handleForm} name="email" />
            {formError.email && (
              <span>Digite um email Valido! Ex: Email@email.com</span>
            )}
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

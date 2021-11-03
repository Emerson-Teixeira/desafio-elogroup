/* eslint-disable no-throw-literal */
import { errorToast, successToast } from "./toasts";

export function saveLeads(lead) {
  try {
    const oldLeads = JSON.parse(localStorage.getItem("arrayLeads"));
    if (oldLeads) {
      localStorage.setItem("arrayLeads", JSON.stringify([...oldLeads, lead]));
    } else {
      localStorage.setItem("arrayLeads", JSON.stringify([lead]));
    }
    successToast("Lead Salvo com sucesso");
    return true;
  } catch (error) {
    errorToast("Não Foi possivel salvar o lead");
    return false;
  }
}
export function saveArrayLeads(leads, leadsTable) {
  function checkForm(form, table) {
    let regEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
    let regPhone =
      /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
    const errors = {
      name: false,
      phone: false,
      email: false,
      options: false,
    };
    if (!form.name) {
      errors.name = true;
    }
    if (!regPhone.test(form.phone)) {
      errors.phone = true;
    }
    if (!regEmail.test(form.email)) {
      errors.email = true;
    }
    if (!table?.find((Element) => Element.status === true)) {
      errors.options = true;
    }
    if (errors.email || errors.name || errors.phone || errors.options) {
      return {
        hasErrors: true,
        errors,
      };
    }
    return {
      hasErrors: false,
      errors,
    };
  }

  try {
    const { hasErrors, errors } = checkForm(leads, leadsTable);
    if (hasErrors) {
      throw {
        hasErrors,
        errors,
        message: "Não Foi Possivel Criar o Lead",
      };
    }
    const arrayLeads = JSON.parse(localStorage.getItem("arrayLeads"));
    if (arrayLeads)
      localStorage.setItem(
        "arrayLeads",
        JSON.stringify([
          ...arrayLeads,
          {
            ...leads,
            oportunidades: leadsTable
              .filter((Element) => Element.status === true)
              .map((Element) => Element.tipo),
          },
        ])
      );
    else {
      localStorage.setItem(
        "arrayLeads",
        JSON.stringify([
          {
            ...leads,
            oportunidades: leadsTable.map((Element) => Element.tipo),
          },
        ])
      );
    }
    return {
      hasErrors,
      errors,
      message: "Lead Criado Com Sucesso",
    };
  } catch (error) {
    return error;
  }
}

export function saveChangesLeads(arrayLeads) {
  try {
    localStorage.setItem("arrayLeads", JSON.stringify(arrayLeads));
    return true;
  } catch (error) {
    return error;
  }
}

export function getLeads() {
  try {
    const results = JSON.parse(localStorage.getItem("arrayLeads"));
    if (results) {
      return results;
    } else {
      return [];
    }
  } catch (error) {
    errorToast("Não Foi possivel salvar o lead");
    return false;
  }
}

export function deleteAllLeads() {
  try {
    localStorage.removeItem("arrayLeads");
  } catch (error) {
    errorToast("Não Foi possivel excluir os leads");
  }
}

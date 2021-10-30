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

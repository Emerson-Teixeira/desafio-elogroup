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
  }
}

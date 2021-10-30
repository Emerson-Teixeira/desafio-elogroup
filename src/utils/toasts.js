import { toast } from "react-toastify";

const toastConfig = {
  position: "top-right",
  autoClose: 3700,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const successToast = (msg) => toast.success(msg, toastConfig);

const errorToast = (msg, type) => {
  switch (type) {
    case "not-register":
      toast.error(
        "Usuario não encontrado, verifique os dados e tente novamente!",
        toastConfig
      );
      break;
    case "wrong-password":
      toast.error("A senha deve cumprir as regras!", toastConfig);
      break;
    default:
      toast.error(msg, toastConfig);
      break;
  }
  return;
};

const infoToast = (msg) => toast.info(msg, toastConfig);

const warningToast = (msg) => toast.warning(msg, toastConfig);

export { successToast, errorToast, infoToast, warningToast };

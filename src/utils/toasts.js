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

const errorToast = (msg) => toast.error(msg);

const infoToast = (msg) => toast.info(msg, toastConfig);

const warningToast = (msg) => toast.warning(msg, toastConfig);

export { successToast, errorToast, infoToast, warningToast };

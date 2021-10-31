import { GiExitDoor } from "react-icons/gi";
import { logout } from "../../../../utils/auth";
import { errorToast, successToast } from "../../../../utils/toasts";
export default function Logout({ history }) {
  const handleClick = (e) => {
    const { error, message } = logout();
    if (error) {
      errorToast(message);
    } else {
      successToast(message);
      history.push("/login");
    }
  };
  return <GiExitDoor onClick={handleClick} size={40} />;
}

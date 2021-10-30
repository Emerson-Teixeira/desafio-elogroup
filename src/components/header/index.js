import { HeaderContainer, LogoContainer, CustomDiv } from "./styles";
import Logo from "../Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import { GiExitDoor } from "react-icons/gi";
import { logout } from "../../utils/auth";
import { deleteAllLeads } from "../../utils/LeadsManager";
export default function Header({ title, history }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo history={history} />
      </LogoContainer>
      <h3>{title}</h3>
      <CustomDiv>
        <ThemeSwitch />
        <GiExitDoor
          onClick={(e) => {
            logout();
            history.push("/");
          }}
          size={40}
        />
      </CustomDiv>
    </HeaderContainer>
  );
}

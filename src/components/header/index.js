import { HeaderContainer, LogoContainer, CustomDiv } from "./styles";
import Logo from "../Logo";
import ThemeSwitch from "./components/ThemeSwitch";
import Logout from "./components/LogOut";
export default function Header({ title, history }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo history={history} />
      </LogoContainer>
      <h3>{title}</h3>
      <CustomDiv>
        <ThemeSwitch />
        <Logout history={history} />
      </CustomDiv>
    </HeaderContainer>
  );
}

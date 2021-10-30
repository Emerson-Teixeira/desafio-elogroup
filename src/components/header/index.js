import { HeaderContainer, LogoContainer } from "./styles";
import Logo from "../Logo";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Header({ title }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>

      <h3>{title}</h3>
      <ThemeSwitch />
    </HeaderContainer>
  );
}

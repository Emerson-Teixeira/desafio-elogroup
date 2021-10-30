import { LogoContainer } from "./styles";
export default function Logo({ history }) {
  return (
    <LogoContainer
      onClick={(e) => {
        history.push("/");
      }}
    >
      <span>
        ELO<strong>GROUP</strong>
      </span>
    </LogoContainer>
  );
}

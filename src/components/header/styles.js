import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  h3{
    color: ${props => props.theme.text};
    font-size: 2rem;
  }
  @media (max-width: 1444px) and (min-width: 769px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    justify-content: center;
    flex-flow: column;
  }
`;

export const LogoContainer = styled.div`
  width: 300px;
`;

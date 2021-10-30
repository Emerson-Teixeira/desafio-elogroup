import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 100%;
  font-size: 2.5em;
  display: flex;
  align-items: center;
  justify-items: center;
  letter-spacing: 5px;
  background-color: ${props => props.theme.logoBackground};
  color: ${props => props.theme.logoText} ;
  padding: 10px;
  span {
    display: block;
    text-align: center;
    width: 100%;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
`;

export const FormWrapper = styled.div`
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  border-radius: 6px;
  width: 25%;
  min-width: 300px;
  border: 1px solid ${(props) => props.theme.text};
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const FormField = styled.div`
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  border-radius: 6px;
  width: 100%;
  padding: 10px;
  margin: 30px 0;
  display: flex;
  flex-flow: column nowrap;
  label {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  input {
    height: 35px;
    outline: none;
    border: none;
    font-size: 1.2em;
    background-color: ${(props) => props.theme.input};
    border: 1px solid ${(props) => (!props.error ? props.theme.text : "red")};
    padding: 3px;
  }
`;

export const CustomButton = styled.button`
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  height: 33px;
  width: 125px;
  background-color: ${({ theme }) => theme.buttons};
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  border-radius: 6px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

export const CustomSpan = styled.span`
  display: block;
  font-size: 1.3em;
  margin: 10px;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

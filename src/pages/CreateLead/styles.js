import styled from "styled-components";

export const FormContainer = styled.div`
  width: 90%;
  min-width: 300px;
  margin: 30px auto;
  display: flex;
  flex-flow: row nowrap;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
  }
`;
export const Container = styled.div`
  max-width: 1200px;
`;

export const DataContainer = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;
export const TableContent = styled.div`
  max-width: 450px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  label {
    font-size: 1.5em;
    font-weight: 600;
  }
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
  max-width: 450px;
  width: 100%;
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

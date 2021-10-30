import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  max-width: 1200px;
`;
export const PanelWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  margin: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column nowrap;
`;

export const PanelTableWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  border: 1px solid red;
  margin-top: 20px;
`;
export const CustomButton = styled.button`
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  height: 50px;
  max-width: 500px;
  min-width: 250px;
  width: 100%;
  background-color: ${({ theme }) => theme.buttons};
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 20px;
  }
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.3em;
  letter-spacing: 0.5px;
  transition: 0.2s;
  :hover {
    opacity: 0.8;
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

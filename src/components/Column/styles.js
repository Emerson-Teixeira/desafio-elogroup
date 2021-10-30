import styled from "styled-components";

export const ColumnContainer = styled.div`
  border: 1px solid ${(props) => props.theme.descriptionCard};
  width: 100%;
  min-width: 70px;
  margin: 10px;
  border-radius: 6px;
  padding: 5px 10px;
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-height: 550px;
`;
export const NameColumn = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StatusColumn = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 5px;
  background-color: ${(props) => props.color};
  margin-top: 30px;
`;
export const HeaderColumn = styled.div`
  width: 100%;
  border-radius: 6px;
  background-color: ${(props) => props.color};
  margin: 10px;
`;

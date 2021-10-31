import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${(props) =>
    props.isDragging ? props.theme.background : props.theme.descriptionCard};
  width: 98%;
  min-width: 50px;
  height: 100px;
  margin: 20px;
  border-radius: 6px;
  padding: 5px 10px;
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: ${(props) =>
    props.isDragging ? `2px solid ${props.color} ` : "none"};
  :hover {
    cursor: grab;
  }
`;
export const NameCard = styled.div`
  font-weight: 600;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const StatusCard = styled.div`
  width: 100%;
  border-radius: 6px;
  height: 5px;
  background-color: ${(props) => props.color};
  margin-top: 30px;
`;
export const EmailCard = styled.div`
  font-weight: 600;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CustomSpan = styled.span`
  display: block;
  font-size: 1.3em;
  margin: 5px;
  font-weight: 600;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

import styled from "styled-components";

export const CustomTable = styled.table`
  width: 100%;
  margin: 40px;
  font-size: 1.2em;
  font-weight: 600;
  box-shadow: 0px 0px 10px -0px rgba(0, 0, 0, 1);
  padding: 3px;
`;
export const TableRow = styled.tr`
  :nth-child(even) {
    background-color: ${(props) => props.theme.input};
  }
`;
export const TableHead = styled.th`
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: ${(props) => props.theme.logoBackground};
  color: ${(props) => props.theme.logoText};
`;
export const TableData = styled.td`
  padding: 8px;
  input {
    :hover {
      cursor: pointer;
    }
  }
`;

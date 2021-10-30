import {
  ColumnContainer, HeaderColumn, NameColumn,
  StatusColumn
} from "./styles";
export default function Column({ name, status, ...props }) {
  function getColor(status) {
    switch (status) {
      case "0":
        return "red";
      case "1":
        return "yellow";
      case "2":
        return "blue";
      default:
        return "black";
    }
  }
  return (
    <>
      <ColumnContainer>
        <HeaderColumn>
          <NameColumn>{name}</NameColumn>
          <StatusColumn color={getColor(status)}></StatusColumn>
        </HeaderColumn>
          {props.children}
      </ColumnContainer>
    </>
  );
}

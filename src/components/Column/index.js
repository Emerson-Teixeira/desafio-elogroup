import {
  ColumnContainer,
  HeaderColumn,
  NameColumn,
  StatusColumn,
} from "./styles";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes.js";
import { successToast } from "../../utils/toasts";
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
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    canDrop: (item, monitor) => {
      if (parseInt(item.status) + 1 === parseInt(status)) {
        return true;
      } else {
        return false;
      }
    },
    drop: (item, monitor) => {
      item.changeStatus(item.index, status);
      successToast("Item alterado com sucesso");
    },
  }));

  return (
    <>
      <ColumnContainer ref={drop}>
        <HeaderColumn>
          <NameColumn>{name}</NameColumn>
          <StatusColumn color={getColor(status)}></StatusColumn>
        </HeaderColumn>
        {props.children}
      </ColumnContainer>
    </>
  );
}

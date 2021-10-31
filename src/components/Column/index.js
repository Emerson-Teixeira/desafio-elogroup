import {
  ColumnContainer,
  HeaderColumn,
  NameColumn,
  StatusColumn,
} from "./styles";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes.js";
import { successToast } from "../../utils/toasts";
import { getColor } from "../../utils/utilsFunctions";
export default function Column({ name, status, ...props }) {
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

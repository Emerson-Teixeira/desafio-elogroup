import { useState } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes.js";
import ModalCustom from "./ModalContent";
import { CardContainer, EmailCard, NameCard, StatusCard } from "./styles";
import { getColor } from "../../utils/utilsFunctions.js";
export default function Card({
  name,
  email,
  oportunidades,
  phone,
  status,
  changeStatus,
  index,
}) {
  const [showModal, setShowModal] = useState(false);

  const [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { status, changeStatus, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    []
  );

  return (
    <>
      <CardContainer
        isDragging={isDragging}
        ref={dragRef}
        onClick={(e) => setShowModal(true)}
        color={getColor(status)}
      >
        {!isDragging && (
          <>
            <NameCard>Name: {name}</NameCard>
            <EmailCard>Email: {email}</EmailCard>
            <StatusCard color={getColor(status)} />
          </>
        )}
      </CardContainer>
      <ModalCustom
        name={name}
        email={email}
        phone={phone}
        oportunidades={oportunidades}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
}

import { useState } from "react";
import {
  CardContainer,
  NameCard,
  StatusCard,
  EmailCard,
  CustomSpan,
} from "./styles";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/itemTypes.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
      {showModal ? (
        <Modal
          show={showModal}
          onHide={(e) => setShowModal(!showModal)}
          size="lg"
          centered
          className="customModal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <CustomSpan>More Information</CustomSpan>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CustomSpan>Name: {name}</CustomSpan>
            <CustomSpan>Email: {email}</CustomSpan>
            <CustomSpan>Phone: {phone}</CustomSpan>
            <CustomSpan>Opportunities: {oportunidades.join(", ")} </CustomSpan>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => setShowModal(!showModal)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
